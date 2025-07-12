import { overrideThemes } from 'markedit-theming';
import { enabledMode, lightTheme, darkTheme } from './src/settings';
import { themeNamed } from './src/themes';

overrideThemes({
  light: ['both', 'light'].includes(enabledMode) ? themeNamed(lightTheme) : undefined,
  dark: ['both', 'dark'].includes(enabledMode) ? themeNamed(darkTheme) : undefined,
});
