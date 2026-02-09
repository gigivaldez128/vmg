import { motion as Motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface relative z-10 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <Motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                            <Motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2 group"
                            >
                                <img
                                    src="/image/4.jpg"
                                    alt="Friendship moment 1"
                                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3 w-8 h-8 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-sm">💕</span>
                                </div>
                            </Motion.div>
                            <Motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2 group mt-8"
                            >
                                {/* Modern Video Player */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                >
                                    <source src="/video/16.mp4" type="video/mp4" />
                                </video>
                                {/* Play icon overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-xl">
                                    <div className="w-12 h-12 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3 w-8 h-8 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-sm">🎥</span>
                                </div>
                            </Motion.div>
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 text-left"
                    >
                        <Motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 mb-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Our Friendship Story
                            </h2>
                        </Motion.div>

                        <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                            <p>
                                Three hearts, one incredible bond. This is the story of a friendship that transcends 
                                time and distance—one boy and two amazing girls who found each other and created 
                                something beautiful together.
                            </p>
                            <p>
                                Through laughter, adventures, and countless memories, we've built a friendship that's 
                                unbreakable. Every moment captured here represents the joy, support, and love that 
                                defines our journey together.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
                            <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 min-w-0">
                                <h4 className="text-primary font-bold text-xl sm:text-2xl mb-0.5 sm:mb-1">3</h4>
                                <p className="text-xs sm:text-sm text-text-secondary">Best Friends</p>
                            </div>
                            <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 min-w-0">
                                <h4 className="text-secondary font-bold text-xl sm:text-2xl mb-0.5 sm:mb-1">∞</h4>
                                <p className="text-xs sm:text-sm text-text-secondary">Memories Made</p>
                            </div>
                            <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 min-w-0">
                                <h4 className="text-accent font-bold text-xl sm:text-2xl mb-0.5 sm:mb-1">💕</h4>
                                <p className="text-xs sm:text-sm text-text-secondary">Love & Laughter</p>
                            </div>
                        </div>

                        <Button variant="primary" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                            Our Journey
                        </Button>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
