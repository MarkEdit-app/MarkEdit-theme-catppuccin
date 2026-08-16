# MarkEdit-theme-catppuccin

[Catppuccin](https://catppuccin.com/) theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

<img width="344" title="Catppuccin Light" src="https://github.com/user-attachments/assets/4106bb2b-c312-4213-aff3-40544be634cc" /> <img width="344" title="Catppuccin Dark" src="https://github.com/user-attachments/assets/4c836437-acc2-461f-8805-7d8bb36d4b90" />

To customize colors, see [Customization](https://github.com/MarkEdit-app/MarkEdit-theming/wiki#customization) for details.

## Installation

Install this extension from the [MarkEdit Extension Registry](https://markedit-app.github.io/extensions/#markedit-theme-catppuccin).

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
