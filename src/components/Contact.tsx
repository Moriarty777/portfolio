import React from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="flex flex-col sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0">
          <li className="flex items-center">
            <Image
              src={phone}
              alt="phone"
              className="h-[80px] sm:h-[110px] w-auto mr-4 sm:mr-6"
            />
            <p className="text-base sm:text-xl">+1-470-939-5035</p>
          </li>
          <li className="flex items-center">
            <Image
              src={mail}
              alt="mail"
              className="h-[80px] sm:h-[110px] w-auto mr-4 sm:mr-6"
            />
            <p className="text-base sm:text-xl">ethekkuden@umassd.edu</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
