import React from "react";
import { HeaderTag, NextImage } from "../../components";
import Tag from "../../components/Tag";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";
import Link from "next/link";

const Work = ({ work }) => {
  const {
    title,
    role,

    solution,
    problem,
    caseLink,
    timeCompleted,
    tags,
    mockup_prototype,
  } = work.attributes;

  return (
    <div>
      <div className="container">
        <div className="row" style={{ wordBreak: "break-word" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <h1>{title}</h1>
          </div>
          <div className="tag-row">
            <Link href={caseLink}>
              <button className="btn btn-primary">Read Case Study</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <p>{timeCompleted}</p>
          <div className="tag-row">
            {tags.map((tag, i) => (
              <Tag tag={tag.tag} key={i} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "64px" }}>
          <div className="row">
            <div
              style={{ display: "flex", gap: "64px", flexDirection: "column" }}
            >
              <div>
                <HeaderTag title="The Problem" />
                <p>{problem}</p>
              </div>
              <div>
                <HeaderTag title="The Solution" />
                <p>{solution}</p>
              </div>
              <div>
                <HeaderTag title="My Role" />
                <p>{role}</p>
              </div>
            </div>
            <div>
              <NextImage image={mockup_prototype} />
            </div>
          </div>

          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const workRes = await fetchAPI("/projects", { fields: ["slug"] });

  return {
    paths: workRes.data.map((work) => ({
      params: {
        slug: work.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const workRes = await fetchAPI("/projects", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });

  return {
    props: { work: workRes.data[0] },
    revalidate: 1,
  };
}

export default Work;
