import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const media = [
    { type: 'image', src: '1.jpg' },
    { type: 'image', src: '2.jpg' },
    { type: 'image', src: '3.jpg' },
    { type: 'video', src: '16.mp4' },
    { type: 'image', src: '4.jpg' },
    { type: 'image', src: '5.jpg' },
    { type: 'image', src: '6.jpg' },
    { type: 'video', src: '17.mp4' },
    { type: 'image', src: '7.jpg' },
    { type: 'image', src: '8.jpg' },
    { type: 'image', src: '9.jpg' },
    { type: 'video', src: '18.mp4' },
    { type: 'image', src: '10.jpg' },
    { type: 'image', src: '11.jpg' },
    { type: 'image', src: '12.jpg' },
    { type: 'video', src: '21.mp4' },
    { type: 'image', src: '13.jpg' },
    { type: 'image', src: '14.jpg' },
    { type: 'image', src: '15.jpg' },
    { type: 'video', src: '25.mp4' },
    { type: 'image', src: '19.jpg' },
    { type: 'image', src: '20.jpg' },
    { type: 'image', src: '23.jpg' },
    { type: 'video', src: '26.mp4' },
    { type: 'image', src: '24.jpg' },
    { type: 'image', src: '30.jpg' },
    { type: 'image', src: '31.jpg' },
    { type: 'video', src: '29.mp4' },
    { type: 'image', src: '32.jpg' },
    { type: 'image', src: '33.jpg' },
    { type: 'image', src: '35.jpg' },
    { type: 'video', src: '34.mp4' },
    { type: 'image', src: '36.jpg' },
    { type: 'image', src: '37.jpg' },
    { type: 'image', src: '38.jpg' },
    { type: 'image', src: '39.jpg' },
    { type: 'image', src: '40.jpg' },
    { type: 'image', src: '41.jpg' },
    { type: 'image', src: '42.jpg' },
    { type: 'image', src: '43.jpg' },
    { type: 'image', src: '44.jpg' },
    { type: 'image', src: '45.jpg' },
    { type: 'image', src: '46.jfif' },
    { type: 'image', src: '47.jfif' },
    { type: 'image', src: '48.jfif' },
    { type: 'image', src: '49.jfif' },
    { type: 'image', src: '50.jfif' },
    { type: 'image', src: '51.jfif' },
    { type: 'image', src: '52.jfif' },
    { type: 'image', src: '54.jfif' },
    { type: 'image', src: '55.jfif' },
    { type: 'image', src: '56.jfif' }
];

const Gallery = () => {
    const [fullscreen, setFullscreen] = useState(null); // { type, src, index }

    const openFullscreen = (item, index) => {
        setFullscreen({ type: item.type, src: item.src, index });
    };

    const closeFullscreen = () => setFullscreen(null);

    const goPrev = () => {
        if (fullscreen === null) return;
        const prevIndex = fullscreen.index === 0 ? media.length - 1 : fullscreen.index - 1;
        setFullscreen({ ...media[prevIndex], index: prevIndex });
    };

    const goNext = () => {
        if (fullscreen === null) return;
        const nextIndex = fullscreen.index === media.length - 1 ? 0 : fullscreen.index + 1;
        setFullscreen({ ...media[nextIndex], index: nextIndex });
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeFullscreen();
        };
        if (fullscreen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [fullscreen]);

    return (
        <section id="gallery" className="py-24 bg-gradient-to-b from-background via-surface/20 to-background relative z-10 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <Motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="text-6xl">📸</span>
                    </Motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        Our Memories
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                        Capturing every moment of laughter, adventure, and friendship. These are the memories that make us who we are.
                    </p>
                </Motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {media.map((item, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.03,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            onClick={() => openFullscreen(item, index)}
                            className="relative aspect-[4/5] group overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            
                            {item.type === 'video' ? (
                                <>
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    >
                                        <source src={`/video/${item.src}`} type="video/mp4" />
                                    </video>
                                    {/* Video play indicator */}
                                    <div className="absolute top-3 left-3 w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                    </div>
                                </>
                            ) : (
                                <img
                                    src={`/image/${item.src}`}
                                    alt={`Friendship memory ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            )}
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 z-20">
                                <span className="text-white font-medium text-sm tracking-wider uppercase border border-white/40 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.type === 'video' ? '🎥 Memory' : '💕 Memory'}
                                </span>
                            </div>
                            <div className={`absolute top-3 right-3 w-3 h-3 ${item.type === 'video' ? 'bg-secondary' : 'bg-primary'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 animate-pulse`}></div>
                        </Motion.div>
                    ))}
                </div>
            </div>

            {/* Fullscreen viewer */}
            <AnimatePresence>
                {fullscreen && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                        onClick={closeFullscreen}
                    >
                        <Motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {fullscreen.type === 'video' ? (
                                <video
                                    src={`/video/${fullscreen.src}`}
                                    controls
                                    autoPlay
                                    loop
                                    muted={false}
                                    playsInline
                                    className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                                />
                            ) : (
                                <img
                                    src={`/image/${fullscreen.src}`}
                                    alt={`Memory ${fullscreen.index + 1}`}
                                    className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )}

                            {/* Close button */}
                            <button
                                onClick={closeFullscreen}
                                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Prev / Next */}
                            {media.length > 1 && (
                                <>
                                    <button
                                        onClick={goPrev}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                                        aria-label="Previous"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={goNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                                        aria-label="Next"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                                {fullscreen.index + 1} / {media.length}
                            </div>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
