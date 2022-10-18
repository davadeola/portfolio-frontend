import React from "react";

import Tag from "./Tag";
import { getStrapiMedia } from "../lib/media";
import Link from "next/link";

function WorkCard({ project }) {
  return (
    <Link href={`/work/${project.attributes.slug}`}>
      <a>
        <div
          className="workCard"
          style={{
            background: `linear-gradient(11.77deg, #252525 7.74%, rgba(0, 0, 0, 0) 97.93%),
    url(${getStrapiMedia(project.attributes.backgroundImage)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 style={{ fontWeight: "bolder" }}>{project.attributes.title}</h3>
          <h4>{project.attributes.description}</h4>
          <div className="tag-row">
            {project.attributes.tags.map((tag, i) => (
              <Tag tag={tag.tag} key={i} />
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default WorkCard;
