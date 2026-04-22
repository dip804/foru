export default function BackgroundOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.92]"
          style={{
            backgroundImage: "url(/hero-scene.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 star-dust opacity-[0.22]" />
        <div className="absolute inset-0 bg-black/22" />
        <div className="absolute -inset-x-24 top-[12%] h-[34%] bg-[radial-gradient(ellipse_at_center,rgba(246,242,236,0.10),transparent_60%)] blur-2xl opacity-25 [animation:haze_18s_ease-in-out_infinite]" />

        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(7,10,23,0.92),rgba(7,10,23,0.0))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(5,6,21,0.95),rgba(5,6,21,0.0))]" />
      </div>
    </div>
  );
}
