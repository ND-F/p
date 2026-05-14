"use client";

import {
  applyThemeVariables,
} from "@/design/applyTheme";

import {
  executive,
} from "@/themes/executive";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeContextType = {

  dark: boolean;

  toggleTheme: () => void;

};

const ThemeContext =
  createContext<ThemeContextType>({
    dark: true,
    toggleTheme: () => {},
  });

type Props = {

  children: React.ReactNode;

};

export function ThemeProvider({
  children,
}: Props) {

  const [mounted, setMounted] =
    useState(false);

  const [dark, setDark] =
    useState(true);

  /* LOAD THEME */
  useEffect(() => {

    const params =
      new URLSearchParams(
        window.location.search
      );

    const isOG =
      params.get("og") === "1";

    /* FORCE DARK FOR OG */
    if (isOG) {

      setDark(true);

      setMounted(true);

      return;

    }

    const savedTheme =
      localStorage.getItem(
        "nadim-theme"
      );

    if (savedTheme) {

      setDark(
        savedTheme === "dark"
      );

    }

    setMounted(true);

  }, []);

  /* APPLY THEME */
  useEffect(() => {

    if (!mounted) return;

    const root =
      document.documentElement;

    root.classList.remove(
      "light",
      "dark"
    );

    root.classList.add(
      dark
        ? "dark"
        : "light"
    );

    applyThemeVariables(
      executive
    );

    localStorage.setItem(
      "nadim-theme",
      dark
        ? "dark"
        : "light"
    );

  }, [dark, mounted]);

  /* TOGGLE */
  const toggleTheme = () => {

    setDark((prev) => !prev);

  };

  /* CONTEXT VALUE */
  const value =
    useMemo(
      () => ({
        dark,
        toggleTheme,
      }),
      [dark]
    );

  /* PREVENT HYDRATION MISMATCH */
  if (!mounted) {

    return null;

  }

  return (

    <ThemeContext.Provider
      value={value}
    >

      {children}

    </ThemeContext.Provider>

  );

}

export const useTheme = () =>
  useContext(ThemeContext);