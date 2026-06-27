import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Settings, Maximize } from "lucide-react";

// تحويل الثواني لفورمات mm:ss
const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export default function VideoPlayer({ src, poster }) {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // تشغيل / إيقاف الفيديو
    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    // كتم / إرجاع الصوت
    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    // الفل سكرين
    const toggleFullscreen = () => {
        const container = containerRef.current;
        if (!container) return;
        if (!document.fullscreenElement) {
            container.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    };

    // الضغط على شريط التقدم للقفز لمكان معين في الفيديو
    const handleSeek = (e) => {
        const video = videoRef.current;
        if (!video || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        video.currentTime = ratio * duration;
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleLoadedMetadata = () => setDuration(video.duration);
        const handleEnded = () => setIsPlaying(false);

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("ended", handleEnded);

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            video.removeEventListener("ended", handleEnded);
        };
    }, []);

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group"
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-cover"
                onClick={togglePlay}
            />

            {/* أوفرلاي غامق فوق صورة الـ poster قبل تشغيل الفيديو، يخلي الـ play button يبرز */}
            {!isPlaying && (
                <div className="absolute inset-0 bg-black/45 pointer-events-none" />
            )}

            {/* زرار الـ Play الكبير في النص لما يكون الفيديو واقف */}
            {!isPlaying && (
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <span className="w-16 h-16 rounded-full bg-primary-container/90 flex items-center justify-center shadow-lg shadow-primary-container/30 hover:scale-105 transition-transform">
                        <Play size={28} className="text-white fill-white ml-0.5" />
                    </span>
                </button>
            )}

            {/* شريط الكنترولز السفلي */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-8">
                {/* شريط التقدم */}
                <div
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 group/seek"
                >
                    <div
                        className="h-full bg-primary rounded-full relative"
                        style={{ width: `${progressPercent}%` }}
                    >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover/seek:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* الأزرار والوقت */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                        </button>
                        <button onClick={toggleMute} className="text-white hover:text-primary transition-colors">
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                        <span className="text-xs text-white/80 font-medium">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-white hover:text-primary transition-colors">
                            <Settings size={18} />
                        </button>
                        <button onClick={toggleFullscreen} className="text-white hover:text-primary transition-colors">
                            <Maximize size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}