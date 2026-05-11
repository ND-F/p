"use client";

import {
  createContext,
  useContext,
  useEffect,
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

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [mounted, setMounted] =
    useState(false);

  const [dark, setDark] =
    useState(true);

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "nadim-theme"
      );

    if (saved) {

      setDark(saved === "dark");

    }

    setMounted(true);

  }, []);

  useEffect(() => {

    if (!mounted) return;

    document.documentElement.classList.toggle(
      "light",
      !dark
    );

    localStorage.setItem(
      "nadim-theme",
      dark ? "dark" : "light"
    );

  }, [dark, mounted]);

  const toggleTheme = () => {

    setDark((prev) => !prev);

  };

  if (!mounted) {
    return null;
  }

  return (

    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}

export const useTheme = () =>
  useContext(ThemeContext);