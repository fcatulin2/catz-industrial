import Link from "next/link";
import BrandLockup from "./brand-lockup";
import { company } from "../site-content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <BrandLockup className="brand-lockup--footer" preserveTriangle />
          <p>Mechanical services for critical industrial assets.</p>
        </div>
        <div className="site-footer__links">
          <div>
            <p className="footer-label">Navigate</p>
            <Link href="/#about">About CATZ</Link>
            <Link href="/#services">Our services</Link>
            <Link href="/#projects">Gallery</Link>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <Link href="/#contact">Request a quotation</Link>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phone.replaceAll(" ", "")}`}>{company.phone}</a>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>&copy; {company.name}</span>
        <span>{company.website}</span>
      </div>
    </footer>
  );
}
