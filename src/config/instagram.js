const DEFAULT_LIMIT = 6;

const normalizedUsername = import.meta.env.VITE_INSTAGRAM_USERNAME
    ? import.meta.env.VITE_INSTAGRAM_USERNAME.replace(/^@/, '').trim()
    : undefined;

const isFeedDisabled =
    import.meta.env.VITE_INSTAGRAM_DISABLED?.toLowerCase() === 'true';

/**
 * Instagram Basic Display is now proxied through `/api/instagram`.
 * Keep the token on the server (Vercel env: `INSTAGRAM_ACCESS_TOKEN`) and
 * optionally disable client-side usage with `VITE_INSTAGRAM_DISABLED=true`.
 */
export const instagramConfig = {
    endpoint: '/api/instagram',
    mediaLimit:
        Number.parseInt(import.meta.env.VITE_INSTAGRAM_MEDIA_LIMIT, 10) ||
        DEFAULT_LIMIT,
    username: normalizedUsername,
    profileUrl: normalizedUsername
        ? `https://instagram.com/${normalizedUsername}`
        : undefined,
};

export const instagramHandle = instagramConfig.username
    ? `@${instagramConfig.username}`
    : 'Instagram';

export const isInstagramConfigured = !isFeedDisabled;

