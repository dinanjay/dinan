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
  const isFirstRender = useRef(true);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [20, 40],
      zoom: 2,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
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

    // Fit bounds to show all markers initially
    if (entries.length > 0) {
      const bounds = L.latLngBounds(entries.map((entry) => entry.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }

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

    // Skip flying to the first coordinate on initial render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const coords = entries[activeIndex]?.coordinates;
    if (coords) {
      mapRef.current.flyTo(coords, 6, { duration: 1.2 });
    }
  }, [activeIndex, entries]);

  return (
    <div className="brutal-border h-[500px] overflow-hidden relative z-0">
      <div ref={containerRef} className="h-full w-full" style={{ background: "hsl(0 0% 7%)" }} />
    </div>
  );
};

export default JourneyMap;
