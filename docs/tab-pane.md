# Tab Pane in KasimirJS Framework

The `KitTabPane` class in KasimirJS allows developers to create tabbed interfaces with ease. Each tab can contain custom content, such as text, forms, or even other custom elements.

## Usage Example

Below is an example of how to use the `KitTabPane` class to create a tabbed interface.

```typescript
import { KitTabPane } from "../src";

// Define the content for each tab
const tabContent1 = document.createElement('div');
tabContent1.textContent = 'Content for tab 1';

const tabContent2 = document.createElement('div');
tabContent2.textContent = 'Content for tab 2';

// Create a tabs object where each key is the tab name and the value is the tab content
const tabs = {
    "Tab 1": tabContent1,
    "Tab 2": tabContent2
};

// Instantiate the KitTabPane with the tabs object
const tabPane = new KitTabPane(tabs);

// Append the tab pane to the document body or any other container
document.body.appendChild(tabPane);
```

### KitTabPane Class Prototype

```typescript
class KitTabPane extends KaCustomFragment {
    constructor(tabs: KitTabs) {
        // Constructor implementation
    }

    public setScope(scope: KaScope): void {
        // Method to set the scope for the tabs
    }
}
```

### KitTabs Type

```typescript
type KitTabs = {
    [tabName: string]: HTMLElement | KaCustomFragment;
}
```

## Extending Functionality

The `KitTabPane` class can be extended to include additional functionality such as dynamic tab creation, custom event handling, or styling.

### Example: Dynamic Tab Creation

```typescript
class DynamicTabPane extends KitTabPane {
    constructor() {
        const dynamicTabs = {};
        // Logic to dynamically create tabs and content
        super(dynamicTabs);
    }

    // Additional methods for dynamic behavior
    public addTab(tabName: string, content: HTMLElement | KaCustomFragment): void {
        // Logic to add a new tab
    }

    public removeTab(tabName: string): void {
        // Logic to remove an existing tab
    }
}

// Usage
const dynamicTabPane = new DynamicTabPane();
dynamicTabPane.addTab("New Tab", document.createElement('div').textContent = 'New tab content');
document.body.appendChild(dynamicTabPane);
```

In this example, `DynamicTabPane` extends `KitTabPane` to add methods for dynamically adding and removing tabs. This allows developers to modify the tabbed interface at runtime based on user interactions or other conditions.

By using `KitTabPane`, developers can create tabbed interfaces that are easy to manage and extend within the KasimirJS framework.