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
      `${data.name} — ${data.title}`,

    description:
      `${data.name} at ${data.company}`,

    icons: {
      icon: "/logos/logo-light.png",
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
    ];

  const contacts: any[] = [

    {
      type: "phone",
      title: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
    },

    {
      type: "email",
      title: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
    },

    {
      type: "website",
      title: "Website",
      value: data.website,
      href: data.website,
    },

  ];

  if (data.whatsapp) {

    contacts.push({

      type: "whatsapp",

      title: "WhatsApp",

      value: data.whatsapp,

      href:
        `https://wa.me/${data.whatsapp}`,

    });

  }

  if (data.linkedin) {

    contacts.push({

      type: "linkedin",

      title: "LinkedIn",

      value: "Profile",

      href: data.linkedin,

    });

  }

  return (

    <main>

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