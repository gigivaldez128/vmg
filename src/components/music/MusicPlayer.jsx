import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [isMuted, setIsMuted] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    // Music playlist - Automatically plays next song when current one ends
    const playlist = [
        {
            title: 'The Process',
            artist: 'LAKEY INSPIRED',
            src: '/music/LAKEY INSPIRED - The Process.mp3',
            cover: '/image/1.jpg'
        },
        {
            title: 'Count on Me',
            artist: 'Bruno Mars',
            src: '/music/bruno mars  count on me   lyrics.mp3',
            cover: '/image/2.jpg'
        },
        {
            title: 'Good Old Days',
            artist: 'feat. Kesha',
            src: '/music/Good Old Days (feat. Kesha).mp3',
            cover: '/image/3.jpg'
        },
        {
            title: 'With a Smile',
            artist: 'South Border',
            src: '/music/WITH A SMILE  SOUTH BORDER (Lyrics).mp3',
            cover: '/image/4.jpg'
        }
    ];

    // Initialize audio
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    // Handle track end - auto play next
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            setCurrentTrack((prev) => (prev + 1) % playlist.length);
        };

        const handleTimeUpdate = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [playlist.length]);

    // Load new track when currentTrack changes
    useEffect(() => {
        if (audioRef.current && playlist[currentTrack]) {
            audioRef.current.src = playlist[currentTrack].src;
            if (isPlaying) {
                audioRef.current.play().catch(() => {
                    console.log('Autoplay prevented. User interaction required.');
                });
            }
        }
    }, [currentTrack, isPlaying, playlist]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {
                    console.log('Playback failed. User interaction may be required.');
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const nextTrack = () => {
        setCurrentTrack((prev) => (prev + 1) % playlist.length);
    };

    const prevTrack = () => {
        setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume > 0) {
            setIsMuted(false);
        }
    };

    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <>
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                preload="auto"
                onLoadedMetadata={() => {
                    if (isPlaying && audioRef.current) {
                        audioRef.current.play().catch(() => {});
                    }
                }}
            />

            {/* Music Player UI */}
            <div className="fixed bottom-0 left-0 right-0 z-50">
                <AnimatePresence>
                    {isExpanded ? (
                        <Motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-surface/95 backdrop-blur-xl border-t border-white/10 shadow-2xl"
                        >
                            <div className="container mx-auto px-6 py-6">
                                <div className="flex items-center gap-6">
                                    {/* Album Cover */}
                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                        <img
                                            src={playlist[currentTrack]?.cover || '/image/1.jpg'}
                                            alt={playlist[currentTrack]?.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                    </div>

                                    {/* Track Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-white font-bold text-lg truncate">
                                            {playlist[currentTrack]?.title || 'No Track'}
                                        </h4>
                                        <p className="text-text-secondary text-sm truncate">
                                            {playlist[currentTrack]?.artist || 'Unknown Artist'}
                                        </p>
                                        <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                        <div className="flex justify-between text-xs text-text-secondary mt-1">
                                            <span>{formatTime(audioRef.current?.currentTime)}</span>
                                            <span>{formatTime(audioRef.current?.duration)}</span>
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={prevTrack}
                                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                            aria-label="Previous track"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                                            </svg>
                                        </button>

                                        <button
                                            onClick={togglePlay}
                                            className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 flex items-center justify-center transition-all shadow-lg"
                                            aria-label={isPlaying ? 'Pause' : 'Play'}
                                        >
                                            {isPlaying ? (
                                                <FaPause className="w-6 h-6 text-white" />
                                            ) : (
                                                <FaPlay className="w-6 h-6 text-white ml-1" />
                                            )}
                                        </button>

                                        <button
                                            onClick={nextTrack}
                                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                            aria-label="Next track"
                                        >
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                                            </svg>
                                        </button>

                                        {/* Volume Control */}
                                        <div className="flex items-center gap-2 w-32">
                                            <button
                                                onClick={toggleMute}
                                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                                aria-label={isMuted ? 'Unmute' : 'Mute'}
                                            >
                                                {isMuted ? (
                                                    <FaVolumeMute className="w-5 h-5 text-white" />
                                                ) : (
                                                    <FaVolumeUp className="w-5 h-5 text-white" />
                                                )}
                                            </button>
                                            <input
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.01"
                                                value={isMuted ? 0 : volume}
                                                onChange={handleVolumeChange}
                                                className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary"
                                            />
                                        </div>

                                        {/* Playlist Indicator */}
                                        <div className="text-xs text-text-secondary">
                                            {currentTrack + 1} / {playlist.length}
                                        </div>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsExpanded(false)}
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                        aria-label="Minimize player"
                                    >
                                        <FaChevronDown className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </Motion.div>
                    ) : (
                        <Motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-surface/95 backdrop-blur-xl border-t border-white/10 shadow-2xl"
                        >
                            <div className="container mx-auto px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                        {/* Mini Album Cover */}
                                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={playlist[currentTrack]?.cover || '/image/1.jpg'}
                                                alt={playlist[currentTrack]?.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                    {/* Track Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-white font-medium text-sm truncate">
                                            {playlist[currentTrack]?.title || 'No Track'}
                                        </h4>
                                        <p className="text-text-secondary text-xs truncate">
                                            {playlist[currentTrack]?.artist || 'Unknown Artist'}
                                        </p>
                                    </div>
                                    </div>

                                    {/* Mini Controls */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={prevTrack}
                                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                            aria-label="Previous track"
                                        >
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <button
                                            onClick={togglePlay}
                                            className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 flex items-center justify-center transition-all"
                                            aria-label={isPlaying ? 'Pause' : 'Play'}
                                        >
                                            {isPlaying ? (
                                                <FaPause className="w-4 h-4 text-white" />
                                            ) : (
                                                <FaPlay className="w-4 h-4 text-white ml-0.5" />
                                            )}
                                        </button>

                                        <button
                                            onClick={nextTrack}
                                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                            aria-label="Next track"
                                        >
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        <button
                                            onClick={() => setIsExpanded(true)}
                                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                            aria-label="Expand player"
                                        >
                                            <FaChevronUp className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default MusicPlayer;
