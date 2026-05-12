
export function applyThemeVariables(
  theme: any
) {

  const root =
    document.documentElement;

  root.style.setProperty(
    "--background",
    theme.colors.background
  );

  root.style.setProperty(
    "--foreground",
    theme.colors.foreground
  );

  root.style.setProperty(
    "--accent",
    theme.colors.accent
  );

  root.style.setProperty(
    "--muted",
    theme.colors.muted
  );

  root.style.setProperty(
    "--surface",
    theme.colors.surface
  );

  root.style.setProperty(
    "--surface-hover",
    theme.colors.surfaceHover
  );

  root.style.setProperty(
    "--border",
    theme.colors.border
  );

  root.style.setProperty(
    "--border-hover",
    theme.colors.borderHover
  );

}
