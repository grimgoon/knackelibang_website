import React from "react";
import { graphql } from "gatsby";
import Layout_Promo from "../components/Layout-Promo";
import Content, { HTMLContent } from "../components/Content";
import Background from "../../static/img/promo_bg_01.png";
import Navbar from "../components/Navbar";

export const PromoPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section>
        <img src={Background} alt="" />
      </section>
      <Navbar overrideClass={"navbarPromo"} />
      <PageContent className="contentPromoPage" content={content} />
    </>
  );
};

const PromoPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout_Promo>
      <PromoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
      />
    </Layout_Promo>
  );
};

export default PromoPage;

export const promoPageQuery = graphql`
  query PromoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
