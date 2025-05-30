"use client";
import { Map, YMaps } from "@pbe/react-yandex-maps";

export default function ServiceCenterMap() {
  return (
    <YMaps>
      <div style={{ width: "100%", height: "600px" }}>
        <Map
          defaultState={{
            center: [41.33706448715841, 69.355573846876],
            zoom: 14,
          }}
          width="100%"
          height="100%"
        ></Map>
      </div>
    </YMaps>
  );
}
