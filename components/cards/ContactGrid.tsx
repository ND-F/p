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
        pb-52
      "
    >

      <div
        className={`
          max-w-6xl
          mx-auto
          grid
          gap-6
          md:gap-7

          sm:grid-cols-2
          xl:grid-cols-3

          ${
            contacts.length === 4
              ? `
                xl:[&>*:last-child]:col-span-3
                xl:[&>*:last-child]:flex
                xl:[&>*:last-child]:justify-center
                xl:[&>*:last-child>div]:w-[32%]
              `
              : ""
          }

          ${
            contacts.length === 5
              ? `
                xl:[&>*:nth-child(4)]:translate-x-[52%]
                xl:[&>*:nth-child(5)]:translate-x-[52%]
              `
              : ""
          }
        `}
      >

        {contacts.map(
          (item, index) => {

            const Icon =
              iconMap[item.type];

            const isLastOddCard =
                contacts.length % 2 !== 0 &&
                contacts.length < 4 &&
                index === contacts.length - 1;

            return (

              <div
                key={index}
                className={
                  isLastOddCard
                    ? `
                      sm:col-span-2
                      sm:flex
                      sm:justify-center

                      xl:block
                    `
                    : ""
                }
              >

                <div
                  className={
                    isLastOddCard
                      ? `
                        sm:w-[48%]

                        xl:w-auto
                      `
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