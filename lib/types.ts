export type ThemeName =
  | "executive"
  | "foundation"
  | "group";

export type SocialItem = {

  type:
    | "phone"
    | "email"
    | "website"
    | "whatsapp"
    | "linkedin";

  title: string;

  value: string;

  href: string;

};

export type Employee = {

  slug: string;

  name: string;

  title: string;

  company: string;

  email: string;

  phone: string;

  website?: string;

  address?: string;

  theme: ThemeName;

  contacts: SocialItem[];

};