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
            : new Error('Instagram feed is disabled.'),
    );

    useEffect(() => {
        if (!isInstagramConfigured) {
            return;
        }

        let isCancelled = false;
        const controller = new AbortController();

        const params = new URLSearchParams();
        if (limit) {
            params.set('limit', String(limit));
        }

        setStatus(FEED_STATUS.loading);
        setError(null);

        const queryString = params.toString();
        const url = queryString
            ? `${instagramConfig.endpoint}?${queryString}`
            : instagramConfig.endpoint;

        fetch(url, {
            signal: controller.signal,
        })
            .then(async (response) => {
                const payload = await response
                    .json()
                    .catch(() => undefined);

                if (!response.ok) {
                    const message =
                        payload?.error ||
                        payload?.message ||
                        `Instagram responded with ${response.status}`;
                    throw new Error(message);
                }
                return payload;
            })
            .then((payload) => {
                if (isCancelled) return;
                const items = payload?.data ?? [];
                setPosts(
                    items.slice(
                        0,
                        limit ?? instagramConfig.mediaLimit,
                    ),
                );
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

