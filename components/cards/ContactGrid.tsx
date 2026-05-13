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

import ContactCard from "./ContactCard";

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

  const rows: typeof contacts[] = [];

  for (let i = 0; i < contacts.length; i += 3) {

    rows.push(
      contacts.slice(i, i + 3)
    );

  }

  return (

    <section
      className="
relative
z-20

-mt-8

px-2
md:px-4

pb-28
"
    >

      <div
        className="
max-w-7xl
mx-auto

space-y-3
md:space-y-4
"
      >

        {rows.map((row, rowIndex) => {

          const isOne =
            row.length === 1;

          const isTwo =
            row.length === 2;

          return (

            <div
              key={rowIndex}
              className={`
flex
flex-wrap

gap-2
md:gap-4

${
  isOne || isTwo
    ? "justify-center"
    : "justify-between"
}
`}
            >

              {row.map((item, index) => {

                const Icon =
                  iconMap[item.type];

                return (

                  <div
                    key={index}
                    className="
w-[31.5%]
min-w-[31.5%]
"
                  >

                    <ContactCard
                      title={item.title}
                      value={item.value}
                      href={item.href}
                      icon={Icon}
                    />

                  </div>

                );

              })}

            </div>

          );

        })}

      </div>

    </section>

  );

}