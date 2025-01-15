"use client";
import React from "react";
import "./styles/main.scss";
import Image from "next/image"; 
import router from "next/router";
import Footer from "./components/Footer/Footer";
import LoginBtn from "./components/LoginBtn/LoginBtn";
import Logo from "./components/Logo/Logo";


function page() {

  return (
    <>
    <div className="homepage">
      <div className="homepage__logo">
        <Logo />
        <LoginBtn />
      </div>
      <Image src="/images/readmore.svg" 
        className="homepage__readmore-img"
        alt="background-homepage"
        width={250}
        height={250}/>
    </div>
      <Footer />
    </>
  )
}

export default page