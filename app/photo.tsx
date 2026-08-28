"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Avatar redondo con fallback a iniciales si todavía no se subió la foto.
 * Se usa dentro de .hero-avatar y .bio-avatar (que ya estilan el <img>).
 */
export function Avatar({
  src,
  alt,
  initials = "RR",
}: {
  src: string;
  alt: string;
  initials?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <span className="avatar-initials">{initials}</span>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={src} alt={alt} onError={() => setFailed(true)} />
  );
}

/**
 * Foto de apoyo (estilo editorial). Si el archivo no existe todavía,
 * no renderiza nada — así la página no muestra imágenes rotas.
 */
export function Figure({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return null;

  return (
    <figure className={`photo-figure reveal ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={src} alt={alt} onError={() => setFailed(true)} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
