import { useEffect, useState } from 'react';

import {
    instagramConfig,
    isInstagramConfigured,
} from '@/config/instagram';

export const FEED_STATUS = {
    idle: 'idle',
    loading: 'loading',
    success: 'success',
    error: 'error',
};

export function useInstagramFeed(limit = instagramConfig.mediaLimit) {
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState(
        isInstagramConfigured ? FEED_STATUS.idle : FEED_STATUS.error,
    );
    const [error, setError] = useState(
        isInstagramConfigured
            ? null
            : new Error('Instagram token is missing.'),
    );

    useEffect(() => {
        if (!isInstagramConfigured) {
            return;
        }

        let isCancelled = false;
        const controller = new AbortController();

        const params = new URLSearchParams({
            fields: instagramConfig.fields,
            access_token: instagramConfig.token,
        });

        setStatus(FEED_STATUS.loading);
        setError(null);

        fetch(`${instagramConfig.endpoint}?${params.toString()}`, {
            signal: controller.signal,
        })
            .then(async (response) => {
                if (!response.ok) {
                    const payload = await response
                        .json()
                        .catch(() => undefined);
                    const message =
                        payload?.error?.message ||
                        `Instagram responded with ${response.status}`;
                    throw new Error(message);
                }
                return response.json();
            })
            .then((payload) => {
                if (isCancelled) return;
                const items = payload?.data ?? [];
                setPosts(items.slice(0, limit));
                setStatus(FEED_STATUS.success);
            })
            .catch((fetchError) => {
                if (
                    isCancelled ||
                    fetchError.name === 'AbortError'
                ) {
                    return;
                }
                setError(fetchError);
                setStatus(FEED_STATUS.error);
            });

        return () => {
            isCancelled = true;
            controller.abort();
        };
    }, [limit]);

    return { posts, status, error };
}

