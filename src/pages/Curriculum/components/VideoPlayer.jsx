// ============================================
// src/pages/Curriculum/components/VideoPlayer.jsx
//
// بيعرض فيديو يوتيوب حقيقي بالـ youtubeId
// ============================================

const VideoPlayer = ({ youtubeId }) => {
  // لو مفيش يوتيوب ID → اعرض placeholder
  if (!youtubeId) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-surface-container-high flex items-center justify-center">
        <p className="text-on-surface-variant">مفيش فيديو متاح</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl shadow-black/30">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
        title="Lesson Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
