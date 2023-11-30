import {FlexModal} from "../src";

// Example without scope
const flexModal = new FlexModal("Flex Modal", "<p>Flexible content.</p>", ["<button ka.on.click=\"$fn.close()\">Close</button>", "<button ka.on.click=\"$fn.resolve()\">Save</button>"]);
await flexModal.show();
console.log("Save was clicked");

// Example with scope
const flexModal2 = new FlexModal("Flex Modal", "<p>[[ name ]]</p>", ["<button ka.on.click=\"$fn.close()\">Close</button>", "<button ka.on.click=\"$fn.resolve()\">Save</button>"]);
let result = await flexModal2.show({name: "John Doe"});
console.log("Save was clicked", result.name);


// Providing custom parser to extract name from scope
const flexModal3 = new FlexModal("What is your name", "<p><input ka.bind='$scope.name'></p>", ["<button ka.on.click=\"$fn.close()\">Close</button>", "<button ka.on.click=\"$fn.resolve()\">Save</button>"]);
let name = await flexModal3.show({name: "John Doe"}, (scope) => {return scope.name});
console.log("Save was clicked", name);

