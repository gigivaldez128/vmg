import { motion as Motion } from 'framer-motion';

const Quotes = () => {
    const quotes = [
        {
            reference: "Proverbs 17:17",
            text: "A friend loves at all times, and a brother is born for a time of adversity.",
            gradient: "from-pink-500/20 to-purple-500/20"
        },
        {
            reference: "Proverbs 18:24",
            text: "One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            reference: "Ecclesiastes 4:9–10",
            text: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.",
            gradient: "from-pink-500/20 to-rose-500/20"
        },
        {
            reference: "John 15:13",
            text: "Greater love has no one than this: to lay down one's life for one's friends.",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            reference: "Proverbs 27:9",
            text: "Perfume and incense bring joy to the heart, and the pleasantness of a friend springs from their heartfelt advice.",
            gradient: "from-rose-500/20 to-pink-500/20"
        },
        {
            text: "A true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face.",
            gradient: "from-pink-500/20 to-purple-500/20"
        },
        {
            text: "Friendship isn't about who you've known the longest, it's about who walked in when others walked out.",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            text: "Good friends are like stars. You don't always see them, but you know they're always there.",
            gradient: "from-pink-500/20 to-rose-500/20"
        },
        {
            text: "A real friend accepts you as you are and helps you become who you should be.",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
            gradient: "from-rose-500/20 to-pink-500/20"
        }
    ];

    return (
        <section id="quotes" className="py-24 bg-gradient-to-b from-background via-background to-surface/30 relative z-10 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                        <span className="text-6xl">💕</span>
                    </Motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        Quotes About Friendship
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                        Timeless wisdom celebrating the beauty and power of true friendship
                    </p>
                </Motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {quotes.map((quote, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.08,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.03, 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${quote.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className="relative bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/20">
                                {quote.reference && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-primary text-sm font-semibold">
                                            {quote.reference}
                                        </span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                                    </div>
                                )}
                                <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                                    "{quote.text}"
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-primary/60">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-xs font-medium">Friendship</span>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quotes;
