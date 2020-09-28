import React from "react";
import Helmet from "react-helmet";

import Wrapper from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "../../styles/index.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Abhay Gupta: Engineer with an aritifical intelligence background"
      meta={[
        {
          name: "description",
          content:
            "Abhay Gupta is a machine learning engineer based in Mountain View, California"
        },
        {
          name: "keywords",
          content:
            "machine learning, deep learning, computer vision, natutal language processing"
        },
        // {
        //   name: "google-site-verification",
        //   content: "ZQKLQAaGhOabXPhA_kdXgKHw3hOlbjkGImQAAVD_uG0"
        // }
      ]}
    />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </div>
);

export default Layout;
