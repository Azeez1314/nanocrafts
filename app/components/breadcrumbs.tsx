"use client";

import Link from "next/link";

export default function Breadcrumbs({ segments }: { segments: { label: string; href?: string; }[] }) {
  return (
    <nav className="text-sm flex items-center gap-2 py-6 text-gray-400">
      {segments.map((seg, i) => (
        <span key={i} className="flex items-center gap-2">
          {seg.href ? (
            <Link href={seg.href} className="hover:text-pink-400 transition">
              {seg.label}
            </Link>
          ) : (
            <span className="text-white">{seg.label}</span>
          )}
          {i < segments.length - 1 && <span className="text-gray-500">/</span>}
        </span>
      ))}
    </nav>
  );
}
