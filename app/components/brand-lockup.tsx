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
          <path
            className="brand-lockup__separator-layer"
            d="M 762 39 L 843 39 L 902 146 L 1028 146 L 1028 160 L 851 160 Z M 851 146 L 1028 146 L 1028 392 L 1051 420 L 1079 462 L 1056 465 L 992 370 L 936 280 Z"
            aria-hidden="true"
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
