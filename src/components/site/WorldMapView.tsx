import { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Marker,
  Sphere,
} from "react-simple-maps";
import { COUNTRIES, COUNTRY_BY_GEO, HUB_COORDS, type Country } from "@/components/data/countries";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Tip = { x: number; y: number; country: Country } | null;

export function WorldMap() {
  const [tip, setTip] = useState<Tip>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [rotate, setRotate] = useState<[number, number, number]>([-20, -20, 0]);
  const dragging = useRef<{ x: number; y: number; r: [number, number, number] } | null>(null);

  // gentle auto-rotate until the user interacts
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setRotate((r) => [r[0] - dt * 0.012, r[1], r[2]]);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [auto]);

  return (
    <div className="relative">
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{ scale: 260, rotate }}
        width={900}
        height={560}
        style={{ width: "100%", height: "auto", cursor: dragging.current ? "grabbing" : "grab" }}
        onMouseDown={(e) => {
          setAuto(false);
          dragging.current = { x: e.clientX, y: e.clientY, r: rotate };
        }}
        onMouseMove={(e) => {
          if (!dragging.current) return;
          const dx = e.clientX - dragging.current.x;
          const dy = e.clientY - dragging.current.y;
          const r = dragging.current.r;
          setRotate([r[0] + dx * 0.4, r[1] - dy * 0.3, r[2]]);
        }}
        onMouseUp={() => (dragging.current = null)}
        onMouseLeave={() => (dragging.current = null)}
      >
        <defs>
          <radialGradient id="globe-grad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#1a2f4a" />
            <stop offset="70%" stopColor="#0f1c2e" />
            <stop offset="100%" stopColor="#070d18" />
          </radialGradient>
          <filter id="pin-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        <Sphere id="sphere" fill="url(#globe-grad)" stroke="#1f3552" strokeWidth={0.8} />
        <Graticule stroke="#1f3552" strokeWidth={0.4} />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name: string = geo.properties.name;
              const country = COUNTRY_BY_GEO[name];
              const isActive = Boolean(country);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isActive ? "#0f3d33" : "#16263e"}
                  stroke="#0a1525"
                  strokeWidth={0.35}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: isActive ? "#155745" : "#1a2e4a" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* connecting routes from Riyadh hub */}
        {COUNTRIES.filter((c) => c.slug !== "saudi-arabia").map((c) => (
          <Line
            key={`line-${c.slug}`}
            from={HUB_COORDS}
            to={c.coords}
            stroke="#0baf8a"
            strokeWidth={0.9}
            strokeDasharray="2,3"
            strokeOpacity={0.55}
            fill="none"
          />
        ))}

        {/* red Google-style pins */}
        {COUNTRIES.map((c) => {
          const isHover = hovered === c.slug;
          return (
            <Marker
              key={c.slug}
              coordinates={c.coords}
              onMouseEnter={(e) => {
                setHovered(c.slug);
                setTip({ x: e.clientX, y: e.clientY, country: c });
              }}
              onMouseMove={(e) => setTip({ x: e.clientX, y: e.clientY, country: c })}
              onMouseLeave={() => {
                setHovered(null);
                setTip(null);
              }}
              onClick={() => {
                const el = document.getElementById(`country-${c.slug}`);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              style={{
                default: { cursor: "pointer" },
                hover: { cursor: "pointer" },
                pressed: { cursor: "pointer" },
              }}
            >
              {/* soft glow */}
              <circle r={isHover ? 9 : 6} fill="#ef4444" opacity={0.35} filter="url(#pin-glow)" />
              {/* pin teardrop */}
              <g transform={`translate(0,-14) scale(${isHover ? 1.15 : 1})`}>
                <path
                  d="M0 0 C -6 0 -10 -4 -10 -10 C -10 -16 -5 -22 0 -28 C 5 -22 10 -16 10 -10 C 10 -4 6 0 0 0 Z"
                  fill="#ef4444"
                  stroke="#fff"
                  strokeWidth={1}
                />
                <circle cx={0} cy={-12} r={3.2} fill="#fff" />
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      {tip && (
        <div
          className="pointer-events-none fixed z-50 rounded-lg bg-[#0f1c2e] px-3.5 py-2.5 shadow-xl ring-1 ring-white/10"
          style={{ left: tip.x + 14, top: tip.y + 14 }}
        >
          <div className="text-[14px] font-bold leading-tight text-white">
            {tip.country.flag} {tip.country.name}
          </div>
          <div className="mt-0.5 text-[12px] text-[#94a3b8]">
            {tip.country.openRoles} open roles
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-3 right-4 text-[11px] uppercase tracking-[0.15em] text-white/40">
        Drag to rotate
      </div>
    </div>
  );
}
