export type ThemeName =
  | "executive"
  | "industries"
  | "group"
  | "kenda"
  | "foundation";

export type Employee = {
  slug: string;

  name: string;

  title: string;

  company: string;

  email: string;

  phone: string;

  website: string;

  whatsapp?: string;

  linkedin?: string;

  address?: string;

  theme: ThemeName;
};