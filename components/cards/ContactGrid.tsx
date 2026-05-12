"use client";

import {

  FiPhone,

  FiMail,

  FiGlobe,

} from "react-icons/fi";

import {
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

import ContactCard
from "./ContactCard";

type Props = {

  contacts: {

    type:
      | "phone"
      | "email"
      | "website"
      | "whatsapp"
      | "linkedin";

    title: string;

    value: string;

    href: string;

  }[];

};

const iconMap = {

  phone: FiPhone,

  email: FiMail,

  website: FiGlobe,

  whatsapp: FaWhatsapp,

  linkedin: FaLinkedin,

};

export default function ContactGrid({
  contacts,
}: Props) {

  return (

    <section
      className="
        relative
        z-20

        -mt-10

        px-6
        pb-28
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
          grid
          gap-5
          md:gap-5

          md:grid-cols-2
        "
      >

        {contacts.map(
          (item, index) => {

            const Icon =
              iconMap[item.type];

            const isLastOdd =
              contacts.length % 2 !== 0 &&
              index === contacts.length - 1;

            return (

              <div
                key={index}
                className={
                  isLastOdd
                    ? "md:col-span-2 md:flex md:justify-center"
                    : ""
                }
              >

                <div
                  className={
                    isLastOdd
                      ? "md:w-[48%]"
                      : ""
                  }
                >

                  <ContactCard
                    title={item.title}
                    value={item.value}
                    href={item.href}
                    icon={Icon}
                  />

                </div>

              </div>

            );

          }
        )}

      </div>

    </section>

  );

}