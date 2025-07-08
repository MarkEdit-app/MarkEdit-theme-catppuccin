import { MarkEdit } from 'markedit-api';
import type { JSONObject, JSONValue } from 'markedit-api';
import { FlavorName } from './themes';

const userSettings = toObject(MarkEdit.userSettings);
const rootValue = toObject(userSettings['extension.markeditThemeCatppuccin']);

export const isEnabled = (rootValue.isEnabled ?? true) as boolean;
export const lightTheme = (rootValue.lightTheme ?? 'latte') as FlavorName;
export const darkTheme = (rootValue.darkTheme ?? 'mocha') as FlavorName;

function toObject(jsonValue: JSONValue, defaultValue = {}) {
  return (jsonValue ?? defaultValue) as JSONObject;
}
