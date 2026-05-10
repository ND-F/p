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

  }, []);

  useEffect(() => {

    document.documentElement.classList.toggle(
      "light",
      !dark
    );

    localStorage.setItem(
      "nadim-theme",
      dark ? "dark" : "light"
    );

  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

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