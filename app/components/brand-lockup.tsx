import Image from "next/image";

type BrandLockupProps = {
  className?: string;
  preserveTriangle?: boolean;
};

export default function BrandLockup({ className = "", preserveTriangle = false }: BrandLockupProps) {
  return (
    <span className={`brand-lockup ${className}`.trim()} aria-label="CATZ Industrial">
      {preserveTriangle ? (
        <svg
          className="brand-lockup__image brand-lockup__image--layered"
          viewBox="0 0 1724 912"
          role="img"
          aria-label="CATZ Industrial - Specialized Industrial Services"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            className="brand-lockup__base-layer"
            href="/site-media/catz-logo-full.png"
            width="1724"
            height="912"
            preserveAspectRatio="none"
          />
          <image
            className="brand-lockup__white-layer"
            href="/site-media/catz-logo-dark.png"
            width="1724"
            height="912"
            preserveAspectRatio="none"
          />
        </svg>
      ) : (
        <Image
          className="brand-lockup__image"
          src="/site-media/catz-logo-full.png"
          alt="CATZ Industrial - Specialized Industrial Services"
          width={1724}
          height={912}
          loading="eager"
        />
      )}
    </span>
  );
}
