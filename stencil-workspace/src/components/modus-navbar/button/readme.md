# modus-navbar-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                               | Type      | Default     |
| ---------- | ----------- | ----------------------------------------- | --------- | ----------- |
| `buttonId` | `button-id` | The id for the button in the Navbar.      | `string`  | `undefined` |
| `icon`     | `icon`      | The icon for the button in the Navbar.    | `string`  | `undefined` |
| `menu`     | `menu`      | The menu for the button in the Navbar.    | `string`  | `undefined` |
| `reverse`  | `reverse`   |                                           | `boolean` | `undefined` |
| `tooltip`  | `tooltip`   | The tooltip for the button in the Navbar. | `string`  | `undefined` |


## Dependencies

### Used by

 - [modus-navbar-button-list](../button-list)

### Depends on

- [modus-tooltip](../../modus-tooltip)
- [modus-navbar-button-menu](../button-menu)

### Graph
```mermaid
graph TD;
  modus-navbar-button --> modus-tooltip
  modus-navbar-button --> modus-navbar-button-menu
  modus-navbar-button-list --> modus-navbar-button
  style modus-navbar-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


