import type { CSSProperties } from "react";
import { STATION_COUNT } from "@/config/structure";

export function StationGrid() {
  return (
    <div className="grid grid-cols-10 gap-1.5 sm:gap-[9px]">
      {Array.from({ length: STATION_COUNT }, (_, index) => (
        <div
          key={index}
          className="station"
          style={{ "--i": index } as CSSProperties}
        />
      ))}
    </div>
  );
}
