import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="logo">
        <Image src="/images/PaperNook-logo.svg"
            className="logo__img"
            alt="logo"
            width={250}
            height={250}
        />
    </div>
  )
}

export default Logo