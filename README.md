# Kasimir KIT Bootstrap

Kasimir KIT Bootstrap is a collection of Bootstrap-styled web components designed to simplify the development of web applications. It leverages the KasimirJS framework to provide a set of reusable components that can be easily integrated into any project.

## Quick Start

To get started with Kasimir KIT Bootstrap, install the package using npm:

```bash
npm install @kasimirjs/kit-bootstrap
```

Then, import the components you need in your project:

```typescript
import { FlexModal, KitFormInput, QuickInput, KitTabPane, SidebarWrapper } from "@kasimirjs/kit-bootstrap";
```

## Components Overview

| Component       | Description                                           | Documentation                             |
|-----------------|-------------------------------------------------------|-------------------------------------------|
| `FlexModal`     | A flexible modal component for creating dialog boxes. | [FlexModal Docs](/docs/modals.md)         |
| `KitFormInput`  | A form input component with label and help text.      | [Form Input Docs](/docs/quick-input-form-input.md) |
| `QuickInput`    | A simplified form input component as a web element.   | [Quick Input Docs](/docs/quick-input-form-input.md) |
| `KitTabPane`    | A tab pane component for creating tabbed interfaces.  | [Tab Pane Docs](/docs/tab-pane.md)        |
| `SidebarWrapper`| A sidebar component with customizable content.        |                                           |

## Usage Examples

### FlexModal

Create and display a modal with custom content and buttons:

```typescript
const modal = new FlexModal("Modal Title", "<p>Modal Content</p>", ["<button>Close</button>"]);
await modal.show();
```

[More Examples](/examples/flexmodal-example.ts)

### KitFormInput

Create a text input with a label:

```typescript
const nameInput = new KitFormInput("$scope.name", { title: "Name:", type: "text" });
```

### QuickInput

Use as a web component for text and switch inputs:

```html
<quick-input data-type="text" data-name="username" data-label="Username"></quick-input>
```

### KitTabPane

Create a tabbed interface with custom content:

```typescript
const tabs = {
    "Tab 1": document.createElement('div').textContent = 'Content for tab 1',
    "Tab 2": document.createElement('div').textContent = 'Content for tab 2'
};
const tabPane = new KitTabPane(tabs);
```

### SidebarWrapper

Create a sidebar with custom content and an activator icon:

```typescript
const sidebarConfig = new SidebarWrapperConfig();
sidebarConfig.icon = `<svg>...</svg>`; // Your SVG icon
const sidebar = new SidebarWrapper(sidebarConfig);
```

## Advanced Usage

For more advanced usage, including extending components and creating dynamic interfaces, refer to the full documentation linked in the table above.

## Contributing

Contributions are welcome! If you'd like to contribute to Kasimir KIT Bootstrap, please submit a pull request or open an issue on our GitHub repository.

## License

Kasimir KIT Bootstrap is licensed under the MIT License. See the LICENSE file for more details.