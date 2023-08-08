import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./navbar.module.css";

const Navbar = () => {
  return (
    //  <div className={styles.container}>
    //     <nav>
    //       <ul className={styles.navLinks}>
    //         <li className={styles.navLinkItem}>
    //           <Link to="/" className={styles.navLinkText}>
    //             Home
    //           </Link>
    //         </li>
    //         <li className={styles.navLinkItem}>
    //           <Link to="/about" className={styles.navLinkText}>
    //             About
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    <>
      <nav className={styles.container}>
        <div>
          <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
              <Link to="/" className={styles.navLinkText}>
                Home
              </Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/about" className={styles.navLinkText}>
                About
              </Link>
            </li>
          </ul>
          <Link to="/">
            <StaticImage alt="Ark_digital" src="../images/image1.png" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
