import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">This page doesn&apos;t exist. It may have been removed.</p>
      <Link href="/" className="mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white">
        See available properties
      </Link>
    </div>
  );
}
