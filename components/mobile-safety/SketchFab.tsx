'use client';

interface SketchfabViewerProps {
  modelId: string;
  title: string;
  authorName: string;
  authorUrl: string;
}

const SketchfabViewer = ({
  modelId,
  title,
  authorName,
  authorUrl,
}: SketchfabViewerProps) => {
  return (
    <div className="sketchfab-embed-wrapper w-full aspect-video">
      <iframe
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={`https://sketchfab.com/models/${modelId}/embed`}
      />
      <p className="text-sm mt-2 text-gray-600">
        <a
          href={`https://sketchfab.com/3d-models/${modelId}`}
          target="_blank"
          rel="nofollow"
          className="font-bold text-sky-600 hover:text-sky-700"
        >
          {title}
        </a>{' '}
        by{' '}
        <a
          href={authorUrl}
          target="_blank"
          rel="nofollow"
          className="font-bold text-sky-600 hover:text-sky-700"
        >
          {authorName}
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com"
          target="_blank"
          rel="nofollow"
          className="font-bold text-sky-600 hover:text-sky-700"
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabViewer;