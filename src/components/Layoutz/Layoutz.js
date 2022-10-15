import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Header from "../Header/Header";
import SiteFooterz from "../SiteFooterz/SiteFooterz";

const Layoutz = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);
  const { scrollTop } = useScroll(5);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle} || magazinecrm|| Swiss mag tools</title>
      </Head>
      <Preloader loading={loading} />
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className="page-wrapper animated fadeIn"
      >
        <Header />
     
        <SiteFooterz />
      </main>
      {scrollTop && (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          style={{ cursor: "pointer" }}
          className="scroll-to-target scroll-to-top d-inline-block fadeIn animated"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layoutz;
