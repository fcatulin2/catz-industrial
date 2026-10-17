import Image from "next/image";
import { representativeGallery } from "../site-content";

export default function ProjectGallery() {
  return (
    <div className="project-gallery">
      <div className="project-gallery__grid" aria-label="Representative industrial work">
        {representativeGallery.map((project, index) => (
          <figure className="project-gallery__item" key={project.image}>
            <div className="project-gallery__media">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
              />
              <span className="project-gallery__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <figcaption>{project.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
