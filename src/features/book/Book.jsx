import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

// Cover image and inner pages (images only for the book)
const COVER_IMAGE = '/image/1.jpg';
const BOOK_PAGES = [
    { image: '2.jpg', caption: 'Our memories' },
    { image: '3.jpg', caption: 'Together' },
    { image: '4.jpg', caption: 'Best friends' },
    { image: '5.jpg', caption: 'Adventures' },
    { image: '6.jpg', caption: 'Laughter' },
    { image: '7.jpg', caption: 'Moments' },
    { image: '8.jpg', caption: 'Joy' },
    { image: '9.jpg', caption: 'Friendship' },
    { image: '10.jpg', caption: 'Three hearts' },
    { image: '11.jpg', caption: 'One bond' },
    { image: '12.jpg', caption: 'Forever' },
    { image: '13.jpg', caption: '💕' },
];

const Book = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = BOOK_PAGES.length;
    const canGoNext = currentPage < totalPages - 1;
    const canGoPrev = currentPage > 0;

    const goNext = () => {
        if (canGoNext) setCurrentPage((p) => p + 1);
    };

    const goPrev = () => {
        if (canGoPrev) setCurrentPage((p) => p - 1);
    };

    const closeBook = () => {
        setIsOpen(false);
        setTimeout(() => setCurrentPage(0), 400);
    };

    return (
        <section id="book" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background via-surface/20 to-background relative z-10 overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto relative z-10 w-full max-w-4xl">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12"
                >
                    <span className="text-4xl md:text-5xl mb-3 md:mb-4 inline-block">📕</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 md:mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent px-2">
                        Our Digital Book
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto px-2">
                        Tap the book to open it and flip through the pages
                    </p>
                </Motion.div>

                {/* Book container - responsive height & 3D on desktop only */}
                <div className="flex justify-center items-center min-h-[320px] sm:min-h-[400px] md:min-h-[480px] perspective-[2000px]">
                    <div
                        className="relative w-full max-w-2xl h-[280px] sm:h-[360px] md:h-[420px] flex justify-center items-stretch"
                        style={{ perspective: '2000px' }}
                    >
                        {/* Back cover (visible when open, on the left) */}
                        <Motion.div
                            className="absolute left-0 top-0 w-1/2 h-full rounded-l-xl overflow-hidden border border-white/10 shadow-2xl origin-right"
                            style={{
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                                backfaceVisibility: 'hidden',
                            }}
                            initial={false}
                            animate={{ opacity: isOpen ? 1 : 0, zIndex: isOpen ? 2 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-full h-full flex items-center justify-center p-6">
                                <p className="text-text-secondary text-sm text-center">
                                    Three Friends
                                    <br />
                                    One Bond
                                    <br />
                                    💕
                                </p>
                            </div>
                        </Motion.div>

                        {/* Front cover - flips open */}
                        <Motion.div
                            className="absolute top-0 w-1/2 h-full rounded-r-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                            style={{
                                left: '25%',
                                zIndex: 3,
                                transformStyle: 'preserve-3d',
                                transformOrigin: 'left center',
                            }}
                            initial={false}
                            animate={{
                                rotateY: isOpen ? -180 : 0,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            onClick={() => !isOpen && setIsOpen(true)}
                        >
                            <div className="w-full h-full relative">
                                <img
                                    src={COVER_IMAGE}
                                    alt="Book cover"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center">
                                    <h3 className="text-white text-lg sm:text-xl font-bold font-heading mb-0.5 sm:mb-1">
                                        Our Story
                                    </h3>
                                    <p className="text-white/80 text-xs sm:text-sm">Tap to open</p>
                                </div>
                            </div>
                        </Motion.div>

                        {/* Inner pages content - visible when open */}
                        <AnimatePresence>
                            {isOpen && (
                                <Motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="absolute top-0 left-1/2 w-1/2 h-full rounded-r-xl overflow-hidden border border-white/10 border-l-0 shadow-2xl bg-surface"
                                    style={{ zIndex: 1 }}
                                >
                                    <div className="w-full h-full relative flex flex-col">
                                        <div className="flex-1 relative min-h-0">
                                            <AnimatePresence mode="wait">
                                                <Motion.div
                                                    key={currentPage}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="absolute inset-0 p-4 flex flex-col"
                                                >
                                                    <img
                                                        src={`/image/${BOOK_PAGES[currentPage].image}`}
                                                        alt={BOOK_PAGES[currentPage].caption}
                                                        className="w-full h-full object-contain rounded-lg flex-1 min-h-0"
                                                    />
                                                    <p className="text-center text-text-secondary text-sm mt-2">
                                                        {BOOK_PAGES[currentPage].caption}
                                                    </p>
                                                </Motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Page controls - touch-friendly 44px min */}
                                        <div className="flex items-center justify-between p-3 sm:p-4 border-t border-white/5 gap-2">
                                            <button
                                                type="button"
                                                onClick={goPrev}
                                                disabled={!canGoPrev}
                                                className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors touch-manipulation"
                                                aria-label="Previous page"
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <span className="text-text-secondary text-sm tabular-nums">
                                                {currentPage + 1} / {totalPages}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={goNext}
                                                disabled={!canGoNext}
                                                className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors touch-manipulation"
                                                aria-label="Next page"
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </Motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Close book button - only when open */}
                <AnimatePresence>
                    {isOpen && (
                        <Motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="text-center mt-8"
                        >
                            <button
                                type="button"
                                className="min-h-[44px] px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/10 text-white text-sm font-medium transition-colors touch-manipulation"
                                onClick={closeBook}
                            >
                                Close book
                            </button>
                        </Motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Book;
