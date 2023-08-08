import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./layout.module.css";
import Navbar from "./navbar";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      <header>{data.site.siteMetadata.title}</header>
      <Navbar />
      <main>
        <h1 className={styles.header}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
