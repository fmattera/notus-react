/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import Hero from "components/LandingPage/Hero.js";
import Features from "components/LandingPage/Features.js";
import SignupForm from "components/LandingPage/SingupForm";
import FooterLanding from "components/LandingPage/FooterLanding";

export default function Index() {
  return (
    //he;;po
    <>
      <IndexNavbar fixed />
     
      <Hero />
      <Features />
      <div className="h-16 mt-50"></div>
      <SignupForm />
      <FooterLanding/>
      <Footer />
      
    </>
  );
}
