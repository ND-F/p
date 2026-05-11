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
        className="
          max-w-6xl
          mx-auto

          grid

          grid

            sm:grid-cols-2
            xl:grid-cols-3
          gap-6
          md:gap-7
        "
      >

        {contacts.map(
          (item, index) => {

            const Icon =
              iconMap[item.type];

            return (

              <div
                key={index}
                className={
                  contacts.length % 2 !== 0 &&
                  index === contacts.length - 1
                    ? "md:col-span-2 md:flex md:justify-center"
                    : ""
                }
              >

                <div
                  className={
                    contacts.length % 2 !== 0 &&
                    index === contacts.length - 1
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