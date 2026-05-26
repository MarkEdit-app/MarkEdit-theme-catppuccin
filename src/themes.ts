import { Extension } from '@codemirror/state';
import { catppuccinLatte, catppuccinFrappe, catppuccinMacchiato, catppuccinMocha } from '@catppuccin/codemirror';
import { flavors } from '@catppuccin/palette';
import type { ColorName, FlavorName } from '@catppuccin/palette';
import { CustomTheme } from 'markedit-theming';

export type AccentName = Extract<
  ColorName,
  | 'rosewater'
  | 'flamingo'
  | 'pink'
  | 'mauve'
  | 'red'
  | 'maroon'
  | 'peach'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'sky'
  | 'sapphire'
  | 'blue'
  | 'lavender'
>;

export function themeNamed(name: FlavorName, accent: AccentName): CustomTheme {
  const colors = flavors[name].colors;
  const accentColor = colors[accent].hex;

  return {
    extension: extensions[name],
    colors: {
      editor: {
        textColor: colors.text.hex,
        backgroundColor: colors.base.hex,
        activeLineBackground: colors.surface0.hex,
        caretColor: accentColor,
        selectionBackground: colors.surface2.hex,
        matchingBracketBackground: `${colors.surface2.hex}47`,
        gutterText: colors.subtext0.hex,
        gutterBackground: colors.base.hex,
        foldPlaceholderText: colors.overlay0.hex,
        foldPlaceholderBackground: 'transparent',
        searchMatchBackground: `${colors.blue.hex}59`,
        selectionMatchBackground: `${colors.surface2.hex}4d`,
        visibleSpaceColor: colors.overlay0.hex,
      },
      highlight: {
        heading: colors.red.hex,
        bold: colors.red.hex,
        italic: colors.red.hex,
        strikethrough: colors.subtext0.hex,
        quote: colors.pink.hex,
        link: colors.lavender.hex,
        divider: colors.teal.hex,
        comment: colors.overlay2.hex,
        meta: colors.overlay2.hex,
        keyword: colors.mauve.hex,
        atom: colors.red.hex,
        literal: colors.peach.hex,
        string: colors.green.hex,
        special: colors.pink.hex,
        variable: colors.maroon.hex,
        local: colors.text.hex,
        type: colors.yellow.hex,
        class: colors.yellow.hex,
        macro: colors.lavender.hex,
        property: colors.blue.hex,
        label: colors.blue.hex,
        operator: colors.teal.hex,
        constant: colors.peach.hex,
        instruction: colors.mauve.hex,
        invalid: colors.red.hex,
      },
    },
  };
}

export { FlavorName };

const extensions: Record<FlavorName, Extension> = {
  latte: catppuccinLatte,
  frappe: catppuccinFrappe,
  macchiato: catppuccinMacchiato,
  mocha: catppuccinMocha,
};
