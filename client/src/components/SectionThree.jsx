import React from "react";
import Styles from "../css/sectionThree.module.css";

const SectionThree = () => {
  return (
    <>
      <section className={Styles.sectionThree}>
        <div className={Styles.mapouter}>
          <div className={Styles.gmap_canvas}>
            <iframe
              className={Styles.gmap_iframe}
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=1612&amp;height=600&amp;hl=en&amp;q=kasauli&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://pdflist.com/" alt="pdflist.com">
              Pdflist.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
