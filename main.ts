import { overrideThemes } from 'markedit-theming';
import { isEnabled, darkTheme, lightTheme } from './src/settings';
import { themeNamed } from './src/themes';

if (isEnabled) {
  overrideThemes({
    light: themeNamed(lightTheme),
    dark: themeNamed(darkTheme),
  });
}
