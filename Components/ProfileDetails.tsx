import React from "react";
import styles from "../styles/profile.module.css";
interface Props {
  count: number;
  text: string;
  className: string;
  classname: string;
}
const ProfileDetails = ({ count, text, className, classname }: Props) => {
  return (
    <div className={styles.detailscontainer}>
      <h1 className={styles[className]}>{count}</h1>
      <h2 className={styles[classname]}>{text}</h2>
    </div>
  );
};

export default ProfileDetails;
