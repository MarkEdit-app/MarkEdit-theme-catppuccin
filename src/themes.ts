import { Extension } from '@codemirror/state';
import { catppuccinLatte, catppuccinFrappe, catppuccinMacchiato, catppuccinMocha } from '@catppuccin/codemirror';
import type { FlavorName } from '@catppuccin/palette';
import { CustomTheme } from 'markedit-theming';

export function themeNamed(name: FlavorName): CustomTheme {
  return {
    extension: extensions[name],
    colors: {
      subtleEmphasis: true,
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
