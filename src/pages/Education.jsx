import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const Education = () => {
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
                        <CardTitle className="text-3xl apply-glow glow-foreground font-medium">Education</CardTitle>
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
                        <Card className="w-all h-full">
                            <CardHeader>
                                <div className="flex flex-row justify-between items-center flex-wrap sm:flex-nowrap">
                                    <span className="font-semibold apply-glow glow-card-foreground text-2xl">PES University</span>
                                    <span className="text-foreground apply-glow glow-foreground text-md font-light">Aug 2023 - 2027</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col justify-center">
                                    <div className="text-md mt-4 text-foreground apply-glow glow-foreground font-light">• Bachelor of Technology in Computer Science and Engineering</div>
                                    <div className="text-md mt-2 text-foreground apply-glow glow-foreground font-light">• CGPA - 9.04</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Education;
