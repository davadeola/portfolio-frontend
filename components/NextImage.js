import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const NextImage = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <Image
      layout="responsive"
      width={400}
      height={350}
      objectFit="contain"
      src={getStrapiMedia(image.data)}
      alt={alternativeText || ""}
    />
  );
};

export default NextImage;
