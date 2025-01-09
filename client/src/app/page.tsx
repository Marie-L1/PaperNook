import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

function page() {
  const router = useRouter();

  return (
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

      <Image src="/images/background-homepage.jpg" 
        alt="background-homepage"
        width={1000}
        height={500}/>

    </div>
  )
}

export default page