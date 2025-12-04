import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FEED_STATUS, useInstagramFeed } from '@/hooks/useInstagramFeed';
import {
    instagramConfig,
    instagramHandle,
    isInstagramConfigured,
} from '@/config/instagram';

const pageVariants = {
    initial: {
        opacity: 0,
        transform: 'translateZ(0)',
    },
    in: {
        opacity: 1,
        transform: 'translateZ(0)',
    },
    out: {
        opacity: 0,
        transform: 'translateZ(0)',
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1,
};

const Gallery = () => {
    const feedLimit = instagramConfig.mediaLimit;
    const { posts, status, error } = useInstagramFeed(feedLimit);

    const isLoading = status === FEED_STATUS.loading;
    const hasError = status === FEED_STATUS.error;
    const isEmpty =
        status === FEED_STATUS.success && (!posts || posts.length === 0);
    const placeholderCount = feedLimit || 6;

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-screen h-screen flex items-center justify-center backdrop-blur-sm"
        >
            <Card className="w-full h-full bg-card/50 border-0 rounded-none flex flex-col">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-3xl apply-glow glow-foreground font-medium">
                            Gallery
                        </CardTitle>
                        <Button asChild variant="outline">
                            <Link to="/">
                                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                                Back
                            </Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="flex w-full h-full px-4 pb-8">
                    <div className="flex grow flex-col gap-6 py-6 w-full max-w-6xl mx-auto">
                        <div className="text-center space-y-2">
                            <div className="text-4xl text-foreground apply-glow glow-foreground font-semibold">
                                Latest on Instagram
                            </div>
                            <div className="text-base text-muted-foreground apply-glow glow-muted-foreground font-light">
                                {isInstagramConfigured
                                    ? `Showing up to ${feedLimit} recent posts from ${instagramHandle} via the Instagram Basic Display API.`
                                    : 'Add VITE_INSTAGRAM_ACCESS_TOKEN to your environment to enable the live Instagram feed.'}
                            </div>
                        </div>

                        {hasError && (
                            <div className="insta-feed-alert" role="alert">
                                {error?.message ||
                                    'Instagram feed is temporarily unavailable.'}
                            </div>
                        )}

                        <div id="insta-feed" className="insta-feed-grid">
                            {isLoading &&
                                Array.from({ length: placeholderCount }).map(
                                    (_, index) => (
                                        <div
                                            key={`insta-skeleton-${index}`}
                                            className="insta-feed-card"
                                            aria-hidden="true"
                                        >
                                            <div className="insta-feed-skeleton" />
                                        </div>
                                    ),
                                )}

                            {!isLoading &&
                                !hasError &&
                                !isEmpty &&
                                posts.map((post) => {
                                    const caption = post.caption?.trim();
                                    const truncatedCaption =
                                        caption && caption.length > 140
                                            ? `${caption.slice(0, 137)}...`
                                            : caption;
                                    const imageUrl =
                                        post.media_type === 'VIDEO'
                                            ? post.thumbnail_url ||
                                              post.media_url
                                            : post.media_url;

                                    if (!imageUrl) {
                                        return null;
                                    }

                                    return (
                                        <a
                                            key={post.id}
                                            href={post.permalink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="insta-feed-card"
                                            aria-label={
                                                truncatedCaption
                                                    ? `Open Instagram post: ${truncatedCaption}`
                                                    : 'Open Instagram post'
                                            }
                                        >
                                            <img
                                                src={imageUrl}
                                                alt={
                                                    truncatedCaption ||
                                                    'Instagram post'
                                                }
                                                loading="lazy"
                                                className="insta-feed-image"
                                            />
                                            {truncatedCaption && (
                                                <div className="insta-feed-caption">
                                                    {truncatedCaption}
                                                </div>
                                            )}
                                        </a>
                                    );
                                })}

                            {!isLoading && !hasError && isEmpty && (
                                <div className="insta-feed-empty">
                                    <p className="text-lg font-medium">
                                        No posts to show (yet)
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Publish something new on Instagram and
                                        it will appear here automatically.
                                    </p>
                                </div>
                            )}
                        </div>

                        {instagramConfig.profileUrl && (
                            <div className="flex justify-center">
                                <Button
                                    asChild
                                    variant="secondary"
                                    className="gap-2"
                                >
                                    <a
                                        href={instagramConfig.profileUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Instagram className="w-4 h-4" />
                                        Follow {instagramHandle}
                                    </a>
                                </Button>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Gallery;
