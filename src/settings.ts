import { MarkEdit } from 'markedit-api';
import type { JSONObject, JSONValue } from 'markedit-api';
import { FlavorName } from './themes';

const settingsKey = 'extension.markeditThemeCatppuccin';
const userSettings = toObject(MarkEdit.userSettings);
const rootValue = toObject(userSettings[settingsKey]);

const lightTheme = (rootValue.lightTheme ?? 'latte') as FlavorName;
const darkTheme = (rootValue.darkTheme ?? 'mocha') as FlavorName;

export {
  lightTheme,
  darkTheme,
  settingsKey,
};

function toObject(jsonValue: JSONValue, defaultValue = {}) {
  return (jsonValue ?? defaultValue) as JSONObject;
}
