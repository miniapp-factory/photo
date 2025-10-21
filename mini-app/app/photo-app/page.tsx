import { PhotoGlitch } from "@/components/photo-glitch";

export default function PhotoAppPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Glitched 35mm Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PhotoGlitch
          src="/photos/photo1.jpg"
          alt="Glitched photo 1"
          className="rounded-md shadow-md"
        />
        <PhotoGlitch
          src="/photos/photo2.jpg"
          alt="Glitched photo 2"
          className="rounded-md shadow-md"
        />
        <PhotoGlitch
          src="/photos/photo3.jpg"
          alt="Glitched photo 3"
          className="rounded-md shadow-md"
        />
      </div>
    </main>
  );
}
