"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

/* 🎯 Custom branded marker */
const customIcon = new L.DivIcon({
  className: "custom-pin",
  html: `
    <div style="
      width:14px;height:14px;
      background:var(--color-primary);
      border-radius:50%;
      border:3px solid #000;
      box-shadow:0 0 10px var(--color-primary);
    "></div>
  `,
  iconSize: [20, 20],
});

export default function CoxsBazarMap() {
  return (
    <MapContainer
      center={[21.4484829, 91.9803732]} // Cox's Bazar
      zoom={17}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[21.4484829, 91.9803732]} icon={customIcon}>
        <Popup>
          <b>Coxs Bazar</b><br />
          Famous Sea Beach 🌊
        </Popup>
      </Marker>
    </MapContainer>
  );
}