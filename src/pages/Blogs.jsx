import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogs } from '@/data/BlogsData';
import BlogBox from '@/components/BlogBox';
import { consumePendingRect } from '@/lib/expandState';

const expandEase = [0.32, 0.72, 0, 1]

const Blogs = () => {
    const rectRef = useRef(consumePendingRect())
    const r = rectRef.current
    return (
        <motion.div
            style={{ position: 'fixed', zIndex: 50, overflow: 'hidden', padding: '12px' }}
            initial={r ? { top: r.top, left: r.left, width: r.width, height: r.height, borderRadius: 8 } : { opacity: 0 }}
            animate={{ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight, borderRadius: 0, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }}
            transition={{ type: 'tween', duration: 0.9, ease: expandEase }}
        >
            <Card className="w-full h-full overflow-y-auto no-scrollbar bg-card/50 backdrop-blur-sm border border-glow glow-border rounded-md flex flex-col">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-3xl apply-glow glow-foreground font-medium">Blogs</CardTitle>
                        <Button asChild variant="outline">
                            <Link to="/" state={{ back: true }}>
                                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                                Back
                            </Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center w-full">
                    <div className="w-full flex flex-col items-center justify-center sm:w-1/2 gap-4">
                        {blogs.map((blog, index) => (
                            <BlogBox key={index} {...blog} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Blogs;
