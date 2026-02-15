import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { TimelineEntry } from "@/data/experience";
import "leaflet/dist/leaflet.css";

interface JourneyMapProps {
  entries: TimelineEntry[];
  activeIndex: number;
  onMarkerClick: (index: number) => void;
}

function FlyToActive({ coordinates }: { coordinates: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coordinates, 6, { duration: 1.2 });
  }, [coordinates, map]);
  return null;
}

const JourneyMap = ({ entries, activeIndex, onMarkerClick }: JourneyMapProps) => {
  const activeCoords = entries[activeIndex]?.coordinates ?? [48.1351, 11.582];

  return (
    <div className="brutal-border h-[500px] overflow-hidden">
      <MapContainer
        center={activeCoords}
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ background: "hsl(0 0% 7%)" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <FlyToActive coordinates={activeCoords} />
        {entries.map((entry, index) => (
          <CircleMarker
            key={index}
            center={entry.coordinates}
            radius={index === activeIndex ? 10 : 6}
            pathOptions={{
              color: "hsl(0 0% 0%)",
              weight: 3,
              fillColor: index === activeIndex ? "hsl(216 100% 50%)" : "hsl(216 100% 50% / 0.4)",
              fillOpacity: 1,
            }}
            eventHandlers={{ click: () => onMarkerClick(index) }}
          >
            <Popup>
              <span className="font-mono font-bold text-sm">{entry.title}</span>
              <br />
              <span className="text-xs">{entry.location}</span>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default JourneyMap;
