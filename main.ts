import { overrideThemes } from 'markedit-theming';
import { lightTheme, darkTheme, settingsKey } from './src/settings';
import { themeNamed } from './src/themes';

overrideThemes({
  light: themeNamed(lightTheme),
  dark: themeNamed(darkTheme),
  options: { settingsKey },
});
