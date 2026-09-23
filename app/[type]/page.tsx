import type { Metadata } from "next";
import { types, type TypeSlug } from "@/data/properties";
import { ListingView } from "./listing-view";

// Only /rooms and /shops exist; anything else is a 404.
export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(types).map((type) => ({ type }));

type Props = { params: Promise<{ type: TypeSlug }> };
const title = (t: TypeSlug) => `${t === "rooms" ? "Rooms" : "Shops"} for Rent`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const t = title(type);
  const description = `Available ${type} for rent. Photos, features and location. Contact the owner for rent details.`;
  return { title: t, description, openGraph: { title: t, description }, alternates: { canonical: `/${type}` } };
}

export default async function Listing({ params }: Props) {
  const { type } = await params;
  return <ListingView type={type} />;
}
