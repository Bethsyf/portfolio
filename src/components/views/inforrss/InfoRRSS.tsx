import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import s from "./InfoRRSS.module.scss";

const InfoRRSS = () => {
  return (
    <div className={s.info}>
      <div className={s.rrss}>
        <SiGmail />
        <Link href="mailto:bethsyfalcon@gmail.com">bethsyfalcon@gmail.com</Link>
      </div>
      <div className={s.rrss}>
        <FaLinkedinIn />
        <Link
          href="https://www.linkedin.com/in/bethsyfalcon-frontend/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Bethsy Falcon
        </Link>
      </div>
      <div className={s.rrss}>
        <FaGithub />
        <Link
          href="https://github.com/Bethsyf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Bethsyf
        </Link>
      </div>
    </div>
  );
};

export default InfoRRSS;
