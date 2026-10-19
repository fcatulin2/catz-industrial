import Image from "next/image";
import { ArrowRight, Check, Globe2, Mail, MapPin, Phone } from "lucide-react";
import PageLoader from "./components/page-loader";
import ProjectGallery from "./components/project-gallery";
import RequestForm from "./components/request-form";
import Reveal from "./components/reveal";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import {
  company,
  companyProfile,
  coreValues,
  equipment,
  equipmentRental,
  industries,
  leadership,
  services,
  whyCatz,
} from "./site-content";

export default function Home() {
  return (
    <div className="site-shell">
      <PageLoader />
      <SiteHeader />

      <main>
        <section className="hero" id="top">
          <div className="hero__background" aria-hidden="true">
            <Image
              src="/site-media/hero-plant.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero__overlay" aria-hidden="true" />

          <div className="container hero__inner">
            <div className="hero__copy">
              <Reveal>
                <p className="eyebrow">Specialized industrial services</p>
                <h1>Mechanical works and equipment rental.</h1>
                <p className="hero__intro">
                  Mechanical works for plant maintenance and equipment rental for
                  asset owners and EPC contractors in Power, Energy, LNG, Oil &amp;
                  Gas, Marine, and Petrochemical facilities.
                </p>
                <div className="hero__actions">
                  <a className="button button--accent" href="#contact">
                    Request a quotation
                  </a>
                  <a className="text-link" href="#services">
                    Explore services <ArrowRight aria-hidden="true" size={17} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading section-heading--split">
            <Reveal>
              <p className="eyebrow">About CATZ Industrial</p>
              <h2>Engineering judgement at the point of work.</h2>
            </Reveal>
          </div>

          <div className="about-grid">
            <Reveal className="about-grid__image">
              <div className="media-frame media-frame--portrait">
                <Image
                  src="/site-media/ferdinand-catulin-clean.webp"
                  alt="Ferdinand Catulin II, Founder and General Manager of CATZ Industrial"
                  fill
                  sizes="(max-width: 760px) 100vw, 48vw"
                />
              </div>
              <p className="image-caption">Ferdinand Catulin II / Founder &amp; General Manager</p>
            </Reveal>

            <Reveal className="about-grid__copy" delay={120}>
              <p>{companyProfile.overview}</p>
              <p>
                We protect and extend critical assets through safe,
                quality-assured, and cost-efficient specialized services. Our
                approach combines skilled people and sound engineering with
                continuous improvement through technology and automation.
              </p>
              <div className="profile-line">
                <span>
                  <strong>{leadership.name}</strong>
                  <small>{leadership.role} - {leadership.experience}</small>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal className="leadership-details" delay={100}>
            <div className="leadership-details__heading">
              <p className="eyebrow">Leadership</p>
              <h3>Engineering discipline behind every scope.</h3>
            </div>
            <div className="leadership-details__body">
              <p>{leadership.description}</p>
              <p>{leadership.background}</p>
              <p className="service-number">What the founder brings</p>
              <ul className="leadership-highlights">
                {leadership.strengths.map((strength) => (
                  <li key={strength}>
                    <Check aria-hidden="true" size={17} />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="profile-brief-grid">
            <Reveal className="profile-brief-card">
              <p className="eyebrow">Mission</p>
              <p>{companyProfile.mission}</p>
            </Reveal>
            <Reveal className="profile-brief-card" delay={100}>
              <p className="eyebrow">Vision</p>
              <p>{companyProfile.vision}</p>
            </Reveal>
          </div>

          <Reveal className="values-panel" delay={100}>
            <div className="values-panel__heading">
              <div>
                <p className="eyebrow">Core values</p>
                <h3>Principles that shape the work.</h3>
              </div>
              <p>
                Every project is guided by safety, ownership, practical
                engineering, efficiency, and quality.
              </p>
            </div>
            <div className="values-grid">
              {coreValues.map((value) => (
                <article className="value-card" key={value.name}>
                  <h4>{value.name}</h4>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading section-heading--split">
            <Reveal>
              <p className="eyebrow">Our services</p>
              <h2>Clear scope before work begins.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="section-heading__lede">
                Clients can hire mechanical works, equipment rental, or both. We
                shape the response around the facility, work package, and
                operating conditions.
              </p>
            </Reveal>
          </div>

          <div className="profile-service-grid">
            {services.map((service, index) => (
              <Reveal className="profile-service-card" delay={index * 120} key={service.title}>
                <div className="profile-service-card__image">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
                <div className="profile-service-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="profile-detail-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="rental-detail" delay={100}>
            <div className="rental-detail__copy">
              <p className="eyebrow">Equipment rental process</p>
              <h3>Matched to the project, ready for the site.</h3>
              <p>{equipmentRental.description}</p>
            </div>
            <ul className="rental-detail__list">
              {equipmentRental.details.map((detail) => (
                <li key={detail}>
                  <Check aria-hidden="true" size={17} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="equipment-strip" delay={100}>
            <p className="eyebrow">Equipment experience</p>
            <div className="equipment-list">
              {equipment.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="section why-catz-section" id="why-catz">
          <div className="section-heading section-heading--split">
            <Reveal>
              <p className="eyebrow">Why CATZ</p>
              <h2>Lean coordination with one accountable point of view.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="section-heading__lede">
                A focused team, vetted partners, and direct engineering oversight
                help keep industrial work clear from query to closeout.
              </p>
            </Reveal>
          </div>

          <div className="why-catz-grid">
            {whyCatz.map((reason, index) => (
              <Reveal className="why-catz-card" delay={index * 80} key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading section-heading--split">
            <Reveal>
              <p className="eyebrow">Representative industrial environments</p>
              <h2>Industrial environments in view.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="section-heading__lede">
                This selection of equipment, plant environments, and field
                activity reflects the settings CATZ supports.
              </p>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ProjectGallery />
          </Reveal>
        </section>

        <section className="industries-band" id="industries">
          <div className="industries-band__inner">
            <Reveal>
              <p className="eyebrow eyebrow--light">Industries served</p>
              <h2>Work that fits the facility.</h2>
              <p className="industries-band__intro">
                Our experience is shaped around industrial environments where
                preparation, coordination, and reliable execution matter.
              </p>
            </Reveal>
            <Reveal className="industry-list" delay={140}>
              {industries.map((industry) => (
                <span key={industry.name}>
                  <strong>{industry.name}</strong>
                  <small>{industry.description}</small>
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__inner">
            <Reveal className="contact-section__intro">
              <p className="eyebrow">Contact us</p>
              <h2>Start with the scope.</h2>
              <p>
                Send us a request for a quotation, a site assessment, or rental
                equipment, and we will respond within 24 hours.
              </p>
              <div className="contact-details">
                <a href={"tel:" + company.phone.replaceAll(" ", "")}>
                  <Phone aria-hidden="true" size={18} />
                  <span>{company.phone}</span>
                </a>
                <a href={"mailto:" + company.email}>
                  <Mail aria-hidden="true" size={18} />
                  <span>{company.email}</span>
                </a>
                <span>
                  <MapPin aria-hidden="true" size={18} />
                  <span>{company.location}</span>
                </span>
                <a href={`https://${company.website}`} target="_blank" rel="noreferrer">
                  <Globe2 aria-hidden="true" size={18} />
                  <span>{company.website}</span>
                </a>
              </div>
            </Reveal>
            <Reveal className="request-panel" delay={120}>
              <RequestForm />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
