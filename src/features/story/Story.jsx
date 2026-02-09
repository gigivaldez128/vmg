import { motion as Motion } from 'framer-motion';

const chapters = [
    {
        title: 'The Beginning',
        emoji: '✨',
        text: 'It started with a smile, a laugh, or maybe just being in the right place at the right time. One boy and two amazing girls—three people who had no idea they were about to become each other’s favorite chapter.',
    },
    {
        title: 'Finding Each Other',
        emoji: '🌟',
        text: 'We didn’t plan it. We didn’t search for it. We just… found each other. Through school, through mutual friends, or through a moment that felt like fate—our paths crossed and decided to stay together.',
    },
    {
        title: 'First Adventures',
        emoji: '🛤️',
        text: 'Remember the first trip? The first inside joke? The first time we stayed up too late talking about everything and nothing? Those moments turned into our foundation. Every adventure after that only made the bond stronger.',
    },
    {
        title: 'Through Ups and Downs',
        emoji: '💪',
        text: 'Life isn’t always easy. We’ve had good days and hard days. But through all of it, we had each other. A text at 2 a.m., a hug when it mattered, or just showing up—that’s what real friendship looks like.',
    },
    {
        title: 'Laughter & Memories',
        emoji: '😂',
        text: 'Most of our story is written in laughter. Silly photos, failed dance moves, inside jokes that only we get. We’ve filled our days with moments that we’ll remember forever. This gallery is proof of that.',
    },
    {
        title: 'Three Hearts, One Bond',
        emoji: '💕',
        text: 'We’re not just friends—we’re family. One boy, two girls, and a bond that doesn’t need a label. We know we’ve got each other, today and for all the chapters ahead. This is our story, and we’re still writing it.',
    },
];

const Story = () => {
    return (
        <section id="story" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-surface/20 to-background relative z-10 overflow-hidden px-4 sm:px-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <Motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 md:mb-6"
                    >
                        <span className="text-5xl md:text-6xl">📖</span>
                    </Motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent px-2">
                        Our Story
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2">
                        How three people became best friends—and why we’re never letting go
                    </p>
                </Motion.div>

                <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
                    {chapters.map((chapter, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-2xl backdrop-blur-sm">
                                    {chapter.emoji}
                                </div>
                                <div className="flex-1 pt-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-white mb-2 md:mb-3">
                                        {chapter.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                                        {chapter.text}
                                    </p>
                                </div>
                            </div>
                            {index < chapters.length - 1 && (
                                <div className="absolute left-7 top-16 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />
                            )}
                        </Motion.div>
                    ))}
                </div>

                <Motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-primary font-medium text-lg">
                        — And we’re just getting started —
                    </p>
                </Motion.div>
            </div>
        </section>
    );
};

export default Story;
