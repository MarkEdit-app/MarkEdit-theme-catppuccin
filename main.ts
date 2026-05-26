import { overrideThemes } from 'markedit-theming';
import { lightAccent, lightTheme, darkAccent, darkTheme, settingsKey } from './src/settings';
import { themeNamed } from './src/themes';

overrideThemes({
  light: themeNamed(lightTheme, lightAccent),
  dark: themeNamed(darkTheme, darkAccent),
  options: { settingsKey },
});
