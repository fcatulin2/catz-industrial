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
          viewBox="0 0 1790 879"
          role="img"
          aria-label="CATZ Industrial - Specialized Industrial Services"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="brand-lockup-white" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
            </filter>
            <clipPath id="brand-lockup-triangle-clip" clipPathUnits="userSpaceOnUse">
              <polygon points="558.48 469.39 721.37 248.76 875.31 469.39" />
            </clipPath>
          </defs>
          <image
            className="brand-lockup__base-layer"
            href="/site-media/catz-logo.webp"
            width="1790"
            height="879"
            preserveAspectRatio="none"
          />
          <image
            className="brand-lockup__white-layer"
            href="/site-media/catz-logo.webp"
            width="1790"
            height="879"
            preserveAspectRatio="none"
            filter="url(#brand-lockup-white)"
          />
          <image
            className="brand-lockup__triangle-layer"
            href="/site-media/catz-logo.webp"
            width="1790"
            height="879"
            preserveAspectRatio="none"
            clipPath="url(#brand-lockup-triangle-clip)"
            filter="none"
          />
        </svg>
      ) : (
        <Image
          className="brand-lockup__image"
          src="/site-media/catz-logo.webp"
          alt="CATZ Industrial - Specialized Industrial Services"
          width={1790}
          height={879}
          loading="eager"
        />
      )}
    </span>
  );
}
