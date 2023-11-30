# Form Inputs in KasimirJS Framework

KasimirJS provides two custom elements for handling form inputs: `KitFormInput` and `QuickInput`. These elements allow developers to create and manage form inputs with ease.

## KitFormInput

`KitFormInput` is a custom fragment that creates a form input with a label and optional help text. It supports different input types like text, select, and textarea.

### Usage Example

```typescript
import { KitFormInput } from "../src";

// Create a text input with a label
const nameInput = new KitFormInput("$scope.name", { title: "Name:", type: "text" });

// Create a readonly input
const readonlyInput = new KitFormInput("$scope.email", { title: "Email:", type: "text", readonly: true });

// Create a select input (dropdown)
// Note: The select input type requires additional implementation to handle options.
```

### KitFormInput Class Prototype

```typescript
class KitFormInput extends KaCustomFragment {
    constructor(bindSelector: string, config: KitFormInputConfig) {
        // Constructor implementation
    }
}
```

### KitFormInputConfig Type

```typescript
type KitFormInputConfig = {
    name?: string,
    title?: string,
    type?: string,
    id?: string,
    readonly?: boolean,
}
```

## QuickInput

`QuickInput` is a custom element that simplifies the creation of text and switch (checkbox) inputs. It is designed to be used as a web component with attributes for configuration.

### Usage Example

```html
<!-- Include the QuickInput component script -->
<script type="module" src="../src/quick-input.ts"></script>

<!-- Create a text input with label -->
<quick-input data-type="text" data-name="username" data-label="Username"></quick-input>

<!-- Create a switch input with label -->
<quick-input data-type="switch" data-name="isActive" data-label="Active"></quick-input>
```

### QuickInput Class Prototype

```typescript
class QuickInput extends KaCustomElement {
    get value(): any;
    set value(value: any): void;

    async connectedCallback(): Promise<void> {
        // ConnectedCallback implementation
    }
}
```

### QuickInput Attributes

- `data-type`: Specifies the type of input, either "text" or "switch".
- `data-name`: The name attribute for the input element.
- `data-label`: The label text displayed next to the input.

## Extending Functionality

Both `KitFormInput` and `QuickInput` can be extended to include additional functionality such as validation, custom event handling, or styling.

### Example: Custom Validation

```typescript
class ValidatedInput extends KitFormInput {
    constructor(bindSelector: string, config: KitFormInputConfig) {
        super(bindSelector, config);
        // Add custom validation logic here
    }

    // Override init method if needed
    init<T extends KaScope>(scope: T): KaScope | T {
        // Custom initialization logic
        return super.init(scope);
    }
}

// Usage
const validatedInput = new ValidatedInput("$scope.email", { title: "Email:", type: "email" });
```

In this example, `ValidatedInput` extends `KitFormInput` to add custom validation logic. You can override the `init` method to add additional initialization logic for the input.

By using `KitFormInput` and `QuickInput`, developers can quickly create and manage form inputs within the KasimirJS framework, while also having the flexibility to extend their functionality as needed.