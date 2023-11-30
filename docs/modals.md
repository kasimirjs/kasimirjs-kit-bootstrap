# Modals in KasimirJS Framework

Modals are used to display content in a dialog box that pops up over the current page content. In KasimirJS, modals can be created and managed easily using the `FlexModal` class.

## Defining and Using Modals

To define and use a modal, you need to import the `FlexModal` class from the framework and create an instance of it with the desired configuration.

### Importing FlexModal

```typescript
import { FlexModal } from "@kasimirjs/embed";
```

### Creating a Modal Instance

To create a modal, instantiate the `FlexModal` class with the title, body content, and buttons you want to display.

```typescript
const modal = new FlexModal("My Modal Title", "<p>This is the modal body content.</p>", ["<button>Button 1</button>", "<button>Button 2</button>"]);
```

### Showing the Modal

To display the modal, call the `show` method on the modal instance. You can pass an optional scope and a parser function to process the scope before resolving the modal.

```typescript
let result = await modal.show();
```

### FlexModal Class Prototype

Here is the full prototype of the `FlexModal` class methods:

```typescript
class FlexModal extends KaCustomModal {
    constructor(title: string, body: string, buttons: string[], protected initScope: {} = {}) {
        // Constructor implementation
    }

    public async show(scope: any = {}, parser: (scope: any) => any = (scope) => { return scope }): Promise<any> {
        // Show method implementation
    }
}
```

## Predefined Modals

The framework provides a predefined modal class `FlexModal` which can be customized with different titles, body contents, and buttons. You can also extend this class to create your own predefined modals with specific configurations and behaviors.

### Example: Confirmation Modal

Here's an example of how to create a predefined confirmation modal:

```typescript
class ConfirmationModal extends FlexModal {
    constructor(message: string) {
        const title = "Confirm Action";
        const body = `<p>${message}</p>`;
        const buttons = [
            `<button type="button" class="btn btn-primary" ka.on.click="$fn.resolve()">Confirm</button>`,
            `<button type="button" class="btn btn-secondary" ka.on.click="$fn.close()">Cancel</button>`
        ];
        super(title, body, buttons);
    }
}

// Usage
const confirmModal = new ConfirmationModal("Are you sure you want to proceed?");
await confirmModal.show().then(result => {
    if (result) {
        // User confirmed the action
    } else {
        // User cancelled the action
    }
});
```

In this example, the `ConfirmationModal` extends `FlexModal` and sets up a title, message, and buttons for confirmation and cancellation. When the modal is shown, it returns a promise that resolves with the result of the user's action.

## Extending Functionality

You can extend the functionality of modals by creating custom modal classes that inherit from `FlexModal`. This allows you to encapsulate specific behaviors and styles for different types of modals within your application.

### Example: Custom Styled Modal

```typescript
class StyledModal extends FlexModal {
    constructor(title: string, body: string, buttons: string[]) {
        super(title, body, buttons);
        // Additional styling or behavior can be added here
    }

    // Override show method if needed
    public async show(scope: any = {}, parser: (scope: any) => any = (scope) => { return scope }): Promise<any> {
        // Custom show behavior
        return super.show(scope, parser);
    }
}

// Usage
const styledModal = new StyledModal("Styled Modal", "<p>Custom styled content.</p>", ["<button>Close</button>"]);
await styledModal.show();
```

In this example, `StyledModal` adds custom styles or behaviors to the modal. You can override the `show` method to add additional logic before displaying the modal.

By following these examples, you can define and use modals in your KasimirJS applications, as well as create predefined and custom-styled modals to suit your needs.

## List of Predefined Modals

Currently, the framework provides the following predefined modals:

- `FlexModal`: A flexible modal that can be customized with titles, body contents, and buttons.
- `ConfirmationModal`: A modal with a confirmation message and Confirm/Cancel buttons.

### Usage of Predefined Modals with Await Syntax

```typescript
// Using FlexModal
const flexModal = new FlexModal("Flex Modal", "<p>Flexible content.</p>", ["<button>Close</button>"]);
const flexResult = await flexModal.show();

// Using ConfirmationModal
const confirmModal = new ConfirmationModal("Are you sure you want to delete this item?");
const confirmResult = await confirmModal.show();
if (confirmResult) {
    // Handle confirmation
} else {
    // Handle cancellation
}
```

In these examples, the `await` syntax is used for a cleaner and more readable asynchronous code. The result of the modal is handled immediately after it is closed.
