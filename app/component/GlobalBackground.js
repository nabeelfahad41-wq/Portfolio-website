"use client";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden bg-[linear-gradient(90deg,#000000,#737373)] font-sans">
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
