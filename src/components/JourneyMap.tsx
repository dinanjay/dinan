import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { TimelineEntry } from "@/data/experience";

interface JourneyMapProps {
  entries: TimelineEntry[];
  activeIndex: number;
  onMarkerClick: (index: number) => void;
}

const JourneyMap = ({ entries, activeIndex, onMarkerClick }: JourneyMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.CircleMarker[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: entries[0]?.coordinates ?? [48.1351, 11.582],
      zoom: 5,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    }).addTo(map);

    // Add markers
    entries.forEach((entry, index) => {
      const marker = L.circleMarker(entry.coordinates, {
        radius: 6,
        color: "hsl(0 0% 0%)",
        weight: 3,
        fillColor: "hsl(216 100% 50% / 0.4)",
        fillOpacity: 1,
      }).addTo(map);

      marker.bindPopup(
        `<b style="font-family:'Space Mono',monospace">${entry.title}</b><br/><span style="font-size:12px">${entry.location}</span>`
      );

      marker.on("click", () => onMarkerClick(index));
      markersRef.current.push(marker);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update active marker & fly to
  useEffect(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach((marker, index) => {
      const isActive = index === activeIndex;
      marker.setRadius(isActive ? 10 : 6);
      marker.setStyle({
        fillColor: isActive ? "hsl(216 100% 50%)" : "hsl(216 100% 50% / 0.4)",
      });
    });

    const coords = entries[activeIndex]?.coordinates;
    if (coords) {
      mapRef.current.flyTo(coords, 6, { duration: 1.2 });
    }
  }, [activeIndex, entries]);

  return (
    <div className="brutal-border h-[500px] overflow-hidden">
      <div ref={containerRef} className="h-full w-full" style={{ background: "hsl(0 0% 7%)" }} />
    </div>
  );
};

export default JourneyMap;
