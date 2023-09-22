# kasimirjs-kit-bootstrap
KasimirJs Bootstrap Element



## Modals

```typescript
let modal = new FlexModal("Seite Ändern", `<textarea ka.bind="$scope.text"></textarea>`, [`<button ka.on.click="$fn.resolve()">Save</button>`]);
let result = await modal.show({text: "muh"});
console.log("result", result.text);
```
