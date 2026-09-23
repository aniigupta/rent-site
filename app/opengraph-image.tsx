import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0f172a", color: "white" }}>
        <div style={{ fontSize: 72, fontWeight: 700 }}>Properties Available for Rent</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#cbd5e1" }}>{`Rooms & Shops · ${site.area}`}</div>
      </div>
    ),
    size,
  );
}
