import { themes }
from "@/themes";

export function getTheme(
  slug?: string
) {

  if (!slug) {
    return themes.executive;
  }

  return (
    themes[
      slug as keyof typeof themes
    ] || themes.executive
  );

}