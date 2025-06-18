import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogs } from '@/data/BlogsData';
import BlogBox from '@/components/BlogBox';

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

const Blogs = () => {
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
                        <CardTitle className="text-3xl apply-glow glow-foreground font-medium">Blogs</CardTitle>
                        <Button asChild variant="outline">
                            <Link to="/">
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
