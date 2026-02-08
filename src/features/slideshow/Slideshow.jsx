import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const videoRefs = useRef([]);
    const intervalRef = useRef(null);

    const slides = [
        { type: 'video', src: '/video/46.mp4', title: 'Friendship Moments' },
        { type: 'video', src: '/video/16.mp4', title: 'Adventures Together' },
        { type: 'video', src: '/video/17.mp4', title: 'Laughing Together' },
        { type: 'video', src: '/video/18.mp4', title: 'Making Memories' },
        { type: 'video', src: '/video/21.mp4', title: 'Unforgettable Times' },
        { type: 'video', src: '/video/25.mp4', title: 'Best Friends Forever' },
        { type: 'video', src: '/video/26.mp4', title: 'Joy & Happiness' },
        { type: 'video', src: '/video/29.mp4', title: 'Three Hearts, One Bond' },
    ];

    // Auto-advance slideshow every 4 seconds
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 4000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, slides.length]);

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

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="slideshow" className="py-24 bg-gradient-to-b from-background via-surface/30 to-background relative z-10 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="text-6xl">🎬</span>
                    </Motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        Our Story in Motion
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                        Watch our friendship unfold through these beautiful moments captured in time
                    </p>
                </Motion.div>

                {/* Modern Slideshow Container */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border-2 border-white/10 shadow-2xl">
                        <AnimatePresence mode="wait">
                            {slides.map((slide, index) => (
                                index === currentSlide && (
                                    <Motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        {slide.type === 'video' && (
                                            <video
                                                ref={(el) => (videoRefs.current[index] = el)}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            >
                                                <source src={slide.src} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                        
                                        {/* Slide Title Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                                            <Motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <h3 className="text-2xl md:text-4xl font-bold font-heading text-white mb-2">
                                                    {slide.title}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                                    <span className="text-text-secondary text-sm">
                                                        {index + 1} / {slides.length}
                                                    </span>
                                                </div>
                                            </Motion.div>
                                        </div>
                                    </Motion.div>
                                )
                            ))}
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-30 group"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-30 group"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Play/Pause Button */}
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-30 group"
                            aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
                        >
                            {isPaused ? (
                                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7.5 6.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-6z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'w-12 bg-gradient-to-r from-primary to-secondary'
                                        : 'w-2 bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                        <Motion.div
                            key={currentSlide}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 4, ease: 'linear' }}
                            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slideshow;
