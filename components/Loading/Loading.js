import React from "react";
import ReactLoading from "react-loading";
import styles from "./Loading.module.scss";

const color = "#ed3237";
export const FullPageLoading = () => {
  return (
    <div className={styles.fullPageLoading}>
      <ReactLoading type="bars" color={color} height="50px" width="50px" />
    </div>
  );
};

export const ListingLoading = () => {
  return (
    <div className={styles.listingLoading}>
      <ReactLoading
        type="bubbles"
        color={color}
        height="60px"
        width="70px"
        className="m-auto"
      />
    </div>
  );
};
