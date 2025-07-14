import { Extension } from '@codemirror/state';
import { catppuccinLatte, catppuccinFrappe, catppuccinMacchiato, catppuccinMocha } from '@catppuccin/codemirror';
import { flavors } from '@catppuccin/palette';
import type { FlavorName, CatppuccinColors } from '@catppuccin/palette';
import { CustomTheme } from 'markedit-theming';

export function themeNamed(name: FlavorName): CustomTheme {
  return {
    extension: extensions[name],
    colors: {
      visibleSpace: colors[name].overlay1.hex,
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

const colors: Record<FlavorName, CatppuccinColors> = {
  latte: flavors.latte.colors,
  frappe: flavors.frappe.colors,
  macchiato: flavors.macchiato.colors,
  mocha: flavors.mocha.colors,
};
