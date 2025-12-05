const INSTAGRAM_ENDPOINT = 'https://graph.instagram.com/me/media';
const INSTAGRAM_FIELDS =
    'id,caption,media_url,permalink,thumbnail_url,media_type,timestamp';
const DEFAULT_LIMIT = 6;
const MAX_LIMIT = 12;

const parseLimit = (value) => {
    if (!value) return DEFAULT_LIMIT;
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed) || parsed <= 0) return DEFAULT_LIMIT;
    return Math.min(parsed, MAX_LIMIT);
};

export default async function handler(request, response) {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();

    if (!token) {
        response
            .status(500)
            .json({ error: 'Missing INSTAGRAM_ACCESS_TOKEN on the server.' });
        return;
    }

    const requestUrl = new URL(
        request.url ?? '',
        `http://${request.headers.host ?? 'localhost'}`,
    );
    const limit = parseLimit(requestUrl.searchParams.get('limit'));

    const upstreamParams = new URLSearchParams({
        fields: INSTAGRAM_FIELDS,
        access_token: token,
        limit: String(limit),
    });

    const upstreamUrl = `${INSTAGRAM_ENDPOINT}?${upstreamParams.toString()}`;

    try {
        const instagramResponse = await fetch(upstreamUrl, {
            headers: { Accept: 'application/json' },
        });
        const payload = await instagramResponse
            .json()
            .catch(() => undefined);

        if (!instagramResponse.ok) {
            const message =
                payload?.error?.message ??
                `Instagram responded with ${instagramResponse.status}`;
            response.status(instagramResponse.status).json({ error: message });
            return;
        }

        const items = Array.isArray(payload?.data) ? payload.data : [];
        const trimmed = items.slice(0, limit);

        response.setHeader(
            'Cache-Control',
            's-maxage=300, stale-while-revalidate=300',
        );
        response.status(200).json({
            data: trimmed,
            paging: payload?.paging,
            meta: {
                count: trimmed.length,
                limit,
                fetchedAt: new Date().toISOString(),
            },
        });
    } catch (error) {
        response.status(500).json({
            error:
                error instanceof Error
                    ? error.message
                    : 'Failed to fetch Instagram media.',
        });
    }
}

