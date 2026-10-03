import { getReportImageUrl } from "@/src/utils/report";

interface ReportImageGridProps {
  imageUrls: string[];
}

export default function ReportImageGrid({ imageUrls }: ReportImageGridProps) {
  const images = imageUrls
    .map(getReportImageUrl)
    .filter((url): url is string => Boolean(url));

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <ImageItem
        imageUrl={images[0]}
        className="aspect-[1.65/1] w-full rounded-2xl"
      />
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid aspect-[1.65/1] grid-cols-2 gap-0.5 overflow-hidden rounded-2xl">
        {images.map((imageUrl) => (
          <ImageItem key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid aspect-[1.65/1] grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-2xl">
      <ImageItem imageUrl={images[0]} className="row-span-2" />
      <ImageItem imageUrl={images[1]} />
      <ImageItem imageUrl={images[2]} />
    </div>
  );
}

function ImageItem({
  imageUrl,
  className = "",
}: {
  imageUrl: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-light-gray h-full min-h-0 w-full bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
    />
  );
}
