"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 8%, rgba(34,195,255,0.12) 0%, rgba(5,7,13,0) 50%), radial-gradient(ellipse at 18% 75%, rgba(255,154,61,0.05) 0%, rgba(5,7,13,0) 45%), radial-gradient(ellipse at 82% 92%, rgba(255,94,108,0.05) 0%, rgba(5,7,13,0) 45%)",
        }}
      />
      <div className="absolute inset-0 grid-fine opacity-60" />
      <div className="absolute inset-0 scanline opacity-80" />
    </div>
  );
}
