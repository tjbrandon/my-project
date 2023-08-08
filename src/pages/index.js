import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Ark Digital">
      <p>
        Ark Digital gives end-to-end solutions to cater to their client’s needs.
        Every project that comes through their doors – from consultations to
        huge website revamps to intricate app designs – is tackled through
        creative and collaborative efforts and done through a precise and
        process-oriented approach.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
