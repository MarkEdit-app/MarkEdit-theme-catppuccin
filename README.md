# MarkEdit-theme-catppuccin

[Catppuccin](https://catppuccin.com/) theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

## Installation

Copy [dist/markedit-theme-catppuccin.js](dist/markedit-theme-catppuccin.js) to `~/Library/Containers/app.cyan.markedit/Data/Documents/scripts/`.

You can also run `yarn install && yarn build` to build and deploy the script.

## Settings

In [settings.json](https://github.com/MarkEdit-app/MarkEdit/wiki/Customization#advanced-settings), you can define a settings node named `extension.markeditThemeCatppuccin` to configure this extension, default settings are:

```json
{
  "extension.markeditThemeCatppuccin": {
    "enabledMode": "both",
    "lightTheme": "latte",
    "darkTheme": "mocha"
  }
}
```

- `enabledMode`: Enabled color scheme (`both`, `light`, `dark`, or `none` to disable).
- `lightTheme`: Theme name for light mode, `latte` is the recommended value.
- `darkTheme`: Theme name for dark mode, valid names are `frappe`, `macchiato`, `mocha`.

> Extension settings require MarkEdit 1.24.0 or later.
