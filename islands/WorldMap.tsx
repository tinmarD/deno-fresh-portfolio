import { useEffect, useRef } from "preact/hooks";

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

export default function WorldMap({ lat, lng, zoom = 3 }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !mapRef.current) return;

    // Load Leaflet CSS and JS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    link.crossOrigin = "";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.onload = () => {
      // @ts-ignore Leaflet will be available after script loads
      const L = window.L;

      const map = L.map(mapRef.current!).setView([lat, lng], zoom);

      // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //     maxZoom: 18,
      //     id: 'mapbox/streets-v11', // Try other styles like 'mapbox/dark-v10'
      //     tileSize: 512,
      //     zoomOffset: -1,
      //     accessToken: 'your.mapbox.access.token'
      //   }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map,
      );

      L.marker([lat, lng]).addTo(map)
        .openPopup();

      initialized.current = true;
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, [lat, lng, zoom]);

  return <div ref={mapRef} style={{ height: "300px", width: "100%" }} />;
}
