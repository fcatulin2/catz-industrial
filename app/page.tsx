import Image from "next/image";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import PageLoader from "./components/page-loader";
import ProjectGallery from "./components/project-gallery";
import RequestForm from "./components/request-form";
import Reveal from "./components/reveal";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import {
  company,
  equipment,
  industries,
  leadership,
  services,
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
                <h1>Mechanical services for critical assets.</h1>
                <p className="hero__intro">
                  CATZ Industrial provides mechanical services for plant maintenance
                  and equipment rental for industrial facilities in Batangas and
                  across the Philippines, with a focus on safety, accountability,
                  quality, and fit-for-purpose execution.
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
            <Reveal delay={120}>
              <p className="section-heading__lede">
                We are a focused industrial partner for the maintenance, repair,
                and support work that keeps critical facilities moving.
              </p>
            </Reveal>
          </div>

          <div className="about-grid">
            <Reveal className="about-grid__image">
              <div className="media-frame media-frame--portrait">
                <Image
                  src="/site-media/ferdinand-catulin.jpg"
                  alt="Ferdinand Catulin II, Founder and General Manager of CATZ Industrial"
                  fill
                  sizes="(max-width: 760px) 100vw, 48vw"
                />
              </div>
              <p className="image-caption">Ferdinand Catulin II / Founder &amp; General Manager</p>
            </Reveal>

            <Reveal className="about-grid__copy" delay={120}>
              <p>
                CATZ Industrial OPC is a specialized industrial services company
                based in Batangas, Philippines. We support asset owners and EPC
                contractors with mechanical services for plant maintenance and
                equipment rental at critical industrial facilities.
              </p>
              <p>
                {leadership.description}
              </p>
              <div className="profile-line">
                <span>
                  <strong>{leadership.name}</strong>
                  <small>{leadership.role} - {leadership.experience}</small>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading section-heading--split">
            <Reveal>
              <p className="eyebrow">Our services</p>
              <h2>Clear scope before work begins.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="section-heading__lede">
                From planned maintenance to equipment support, we shape our
                response around the facility, the work package, and the
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
                  <p className="service-number">
                    Service / {index === 0 ? "Mechanical services" : "Equipment rental"}
                  </p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="profile-detail-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="equipment-strip" delay={100}>
            <p className="eyebrow">Equipment experience</p>
            <div className="equipment-list">
              {equipment.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
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
                <span key={industry}>{industry}</span>
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
                Tell us what your facility needs, where the work is located, and
                whether you are requesting a quotation or planning a site visit.
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
