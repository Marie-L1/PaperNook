"use client";
import React from "react";
import "./styles/main.scss";
import Image from "next/image"; 
import router from "next/router";
import Footer from "./components/Footer/Footer";


function page() {

  return (
    <>
    <div className="homepage">
      <div className="homepage__logo">
        <Image src="/images/PaperNook-logo.svg"
          alt="logo"
          width={500}
          height={500}
        />
        <p className="homepage__logo-text">PaperNook</p>

        <div className="homepage__buttons">
          <button className="homepage__buttons__button" onClick={() => router.push("/login")}>Login</button>
          <button className="homepage__buttons__button" onClick={() => router.push("/register")}>Register</button>
        </div>
      </div>
      <Image src="/images/readmore-img.svg" 
        alt="background-homepage"
        width={1000}
        height={500}/>
    </div>
    <Footer />
    </>
  )
}

export default page