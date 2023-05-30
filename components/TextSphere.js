import React, { useEffect } from "react";
import styles from "../styles/TextSphere.module.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "ReactJS",
        "JavaScript",
        "Bootstrap",
        "Figma",
        "NextJS",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "Tailwind",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className={styles.textshpere}>
        {/* span tag className must be "tagcloud"  */}
        <span className={`${styles.tagcloud} tagcloud`}></span>
      </div>
    </>
  );
};

export default TextSphere;