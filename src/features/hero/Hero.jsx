import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRefs = useRef([]);

    const slides = [
        { type: 'video', src: '/video/46.mp4' },
        { type: 'video', src: '/video/16.mp4' },
        { type: 'video', src: '/video/17.mp4' },
        { type: 'video', src: '/video/18.mp4' },
        { type: 'video', src: '/video/21.mp4' },
    ];

    // Auto-advance slideshow every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // Handle video play when slide changes
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentSlide) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [currentSlide]);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Modern Automatic Slideshow Background */}
            <div className="absolute inset-0 z-0">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-primary/20 to-background/80 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-10"></div>
                
                {/* Slideshow Container */}
                <AnimatePresence mode="wait">
                    {slides.map((slide, index) => (
                        index === currentSlide && (
                            <Motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                {slide.type === 'video' && (
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover scale-110"
                                        style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                                    >
                                        <source src={slide.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </Motion.div>
                        )
                    ))}
                </AnimatePresence>
                
                {/* Animated particles effect */}
                <div className="absolute inset-0 z-10">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/40 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
                </div>

                {/* Slideshow Indicators */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-medium tracking-wide uppercase mb-4 text-sm md:text-base">
                        True Friendship
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Three Friends, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                            One Bond
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                        Celebrating the beautiful journey of friendship, laughter, and unforgettable moments together.
                        Where memories are made and bonds are strengthened.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">Our Story</Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 hover:bg-primary/10">View Memories</Button>
                    </div>
                </Motion.div>
            </div>

            {/* Scroll Indicator */}
            <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
                    <Motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </Motion.div>
        </section>
    );
};

export default Hero;
