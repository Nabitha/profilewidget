import Image, { StaticImageData } from "next/image";
import styles from "../styles/sub.module.css";
import React from "react";
interface Props {
  image: StaticImageData;
  details: string;
  classname: string;
}
const ProfileSubDetails = ({ image, details, classname }: Props) => {
  return (
    <div className={styles.subdetails}>
      <Image src={image} objectFit="contain"></Image>
      <p className={styles[classname]}>{details}</p>
    </div>
  );
};

export default ProfileSubDetails;
