const INSTAGRAM_ENDPOINT = 'https://graph.instagram.com/me/media';
const INSTAGRAM_FIELDS =
    'id,caption,media_url,permalink,thumbnail_url,media_type,timestamp';
const DEFAULT_LIMIT = 6;

const normalizedUsername = import.meta.env.VITE_INSTAGRAM_USERNAME
    ? import.meta.env.VITE_INSTAGRAM_USERNAME.replace(/^@/, '').trim()
    : undefined;

/**
 * Instagram Basic Display setup (client-only):
 * 1. Create a Meta app, connect your Instagram Professional account, and link a Facebook Page.
 * 2. Generate a short-lived token via the Graph API Explorer and exchange it for a long-lived token.
 * 3. Store the long-lived token in `VITE_INSTAGRAM_ACCESS_TOKEN` (refresh it every ~60 days or via the
 *    `/refresh_access_token` endpoint) and optionally configure the username/limit variables below.
 *
 * ⚠️  Client-side tokens ship with your bundle. If you need to keep the token secret, proxy this request
 * through a serverless or backend function instead of calling the API directly from the browser.
 */
export const instagramConfig = {
    endpoint: INSTAGRAM_ENDPOINT,
    fields: INSTAGRAM_FIELDS,
    token: import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN?.trim(),
    mediaLimit:
        Number(import.meta.env.VITE_INSTAGRAM_MEDIA_LIMIT) || DEFAULT_LIMIT,
    username: normalizedUsername,
    profileUrl: normalizedUsername
        ? `https://instagram.com/${normalizedUsername}`
        : undefined,
};

export const instagramHandle = instagramConfig.username
    ? `@${instagramConfig.username}`
    : 'Instagram';

export const isInstagramConfigured = Boolean(instagramConfig.token);

