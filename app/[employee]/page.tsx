
import {
  useEffect,
} from "react";

import VCardAutoOpen
from "@/components/vcard/VCardAutoOpen";

import ContactGrid
from "@/components/cards/ContactGrid";

import Footer
from "@/components/layout/Footer";

import MapSection
from "@/components/layout/MapSection";

import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import Hero
from "@/components/hero/Hero";

import FloatingDock
from "@/components/controls/FloatingDock";

import {
  getEmployees,
} from "@/lib/getEmployees";

import {
  themes,
} from "@/themes";

type Props = {
  params: Promise<{
    employee: string;
  }>;
};

export async function generateStaticParams() {

  const employees =
    await getEmployees();

  return employees.map(
    (employee: any) => ({
      employee:
        employee.slug,
    })
  );

}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { employee } =
    await params;

  const employees =
    await getEmployees();

  const data =
    employees.find(
      (e: any) =>
        e.slug === employee
    );

  if (!data) {

    return {
      title: "NADIM",
    };

  }

  return {

    title:
      `${data.name} - ${data.title}`,

    description:
      `${data.name} at ${data.company}`,

    icons: {
      icon: "/logos/logo-light.png",
    },

    openGraph: {

      title:
        `${data.name} - ${data.title}`,

      description:
        `${data.name} at ${data.company}`,

      images: [
        `https://id.nadimfoundation.org/og/${data.slug}.png?v=3`,
      ],

    },

    twitter: {

      card: "summary_large_image",

      title:
        `${data.name} - ${data.title}`,

      description:
        `${data.name} at ${data.company}`,

      images: [
        `https://id.nadimfoundation.org/og/${data.slug}.png?v=3`,
      ],

    },

  };

}

export default async function EmployeePage({
  params,
}: Props) {

  const { employee } =
    await params;

  const employees =
    await getEmployees();

  const data =
    employees.find(
      (e: any) =>
        e.slug === employee
    );

  if (!data) {

    notFound();

  }

  const theme =
    themes[
      data.theme as keyof typeof themes
    ] || themes.executive;

  const contacts: any[] = [];

  function addContact(
    type: string,
    title: string,
    rawValue: string | undefined,
    buildHref: (value: string) => string
  ) {

    if (!rawValue) return;

    const values =
      rawValue
        .split("|")
        .map((v) => v.trim())
        .filter(Boolean);

    values.forEach((value) => {

      contacts.push({

        type,

        title,

        value,

        href:
          buildHref(value),

      });

    });

  }

  addContact(
    "phone",
    "Phone",
    data.phone,
    (value) => `tel:${value}`
  );

  addContact(
    "email",
    "Email",
    data.email,
    (value) => `mailto:${value}`
  );

  addContact(
    "website",
    "Website",
    data.website,
    (value) => value
  );

  addContact(
    "whatsapp",
    "WhatsApp",
    data.whatsapp,
    (value) =>
      `https://wa.me/${value}`
  );

  addContact(
    "linkedin",
    "LinkedIn",
    data.linkedin,
    (value) => value
  );

  useEffect(() => {

    const isMobile =

      /iPhone|iPad|iPod|Android/i
      .test(navigator.userAgent);

    if (!isMobile)
      return;

    const alreadyOpened =

      sessionStorage.getItem(
        "vcard-opened"
      );

    if (alreadyOpened)
      return;

    const timer = setTimeout(() => {

      window.open(
        `/api/vcard/${data.slug}`,
        "_self"
      );

      sessionStorage.setItem(
        "vcard-opened",
        "1"
      );

    }, 1200);

    return () =>
      clearTimeout(timer);

  }, []);

  return (

    <main>

      <VCardAutoOpen
            slug={data.slug}
          />

      <Hero
        name={data.name}
        title={data.title}
        theme={theme}
      />

      <ContactGrid
        contacts={contacts}
      />

      <MapSection
        address={
          data.address || ""
        }
      />

      <FloatingDock
        employee={{
          name: data.name,
          title: data.title,
          company: data.company,
          email: data.email,
          phone: data.phone,
        }}
      />

      <Footer />

    </main>

  );

}