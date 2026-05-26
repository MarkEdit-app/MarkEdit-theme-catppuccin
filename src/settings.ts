import { MarkEdit } from 'markedit-api';
import type { JSONObject, JSONValue } from 'markedit-api';
import type { AccentName, FlavorName } from './themes';

const settingsKey = 'extension.markeditThemeCatppuccin';
const userSettings = toObject(MarkEdit.userSettings);
const rootValue = toObject(userSettings[settingsKey]);

const lightTheme = (rootValue.lightTheme ?? 'latte') as FlavorName;
const darkTheme = (rootValue.darkTheme ?? 'mocha') as FlavorName;
const lightAccent = (rootValue.lightAccent ?? 'mauve') as AccentName;
const darkAccent = (rootValue.darkAccent ?? 'mauve') as AccentName;

export {
  lightAccent,
  lightTheme,
  darkAccent,
  darkTheme,
  settingsKey,
};

function toObject(jsonValue: JSONValue, defaultValue = {}) {
  return (jsonValue ?? defaultValue) as JSONObject;
}
