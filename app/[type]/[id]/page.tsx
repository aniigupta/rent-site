import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pathOf, properties, types, type TypeSlug } from "@/data/properties";
import { DetailView } from "./detail-view";

// Rented properties keep their page so old shared links show "Rented" instead of an error.
export const dynamicParams = false;
export const generateStaticParams = () => properties.map((p) => ({ type: `${p.type}s`, id: p.id }));

type Props = { params: Promise<{ type: TypeSlug; id: string }> };
const find = (type: TypeSlug, id: string) => properties.find((p) => p.id === id && p.type === types[type]);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, id } = await params;
  const p = find(type, id);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    openGraph: { title: p.title, description: p.description, ...(p.images[0] && { images: [p.images[0]] }) },
    alternates: { canonical: pathOf(p) },
  };
}

export default async function Detail({ params }: Props) {
  const { type, id } = await params;
  const p = find(type, id);
  if (!p) notFound();

  return <DetailView p={p} type={type} />;
}
