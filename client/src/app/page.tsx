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
          className="homepage__logo-img"
          alt="logo"
          width={250}
          height={250}
        />
        <p className="homepage__logo-text">Login or Register to start exploring books!</p>
        <div className="homepage__buttons">
          <button className="homepage__btn" onClick={() => router.push("/login")}>Login</button>
          <button className="homepage__btn" onClick={() => router.push("/register")}>Register</button>
        </div>
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