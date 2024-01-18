import {FlexModal} from "@kasimirjs/kit-bootstrap";

/**
 * FlexModal offer a simple way to display a Modal Window.
 *
 * It will render a Bootstrap Modal with the given title, body and buttons.
 *
 * The body parameter can be any KaTemplate string.
 *
 */

// Example without scope
const flexModal = new FlexModal("Flex Modal", "<p>Flexible content.</p>", ["<button ka.on.click=\"$fn.close()\">Close</button>", "<button class='btn btn-primary' ka.on.click=\"$fn.resolve()\">Save</button>"]);
await flexModal.show();
console.log("Save was clicked");

// Example with scope
const flexModal2 = new FlexModal("Flex Modal", "<p>[[ name ]]</p>", ["<button ka.on.click=\"$fn.close()\">Close</button>", "<button class='btn btn-primary' ka.on.click=\"$fn.resolve()\">Save</button>"]);
let result = await flexModal2.show({name: "John Doe"});
console.log("Save was clicked", result.name);


// Providing custom parser to extract name from scope
const flexModal3 = new FlexModal("What is your name", "<p><input ka.bind='$scope.name'></p>", ["<button ka.on.click=\"$fn.close()\">Close</button>", "<button class='btn btn-primary' ka.on.click=\"$fn.resolve()\">Save</button>"]);
let name = await flexModal3.show({name: "John Doe"}, (scope) => {return scope.name});
console.log("Save was clicked", name);


/**
 * Usage Example with KaTemplate:
 */

// language=html
const html = `
    <table>
        <tr ka.for="let row in $scope.data.users">
            <td>[[row.name]]</td>
        </tr>
    </table>`;
export class UserRowModal extends FlexModal {
    constructor() {
        super("User List", html, [
            "<button class='btn btn-secondary' ka.on.click=\"$fn.close()\">Close</button>",
            "<button class='btn btn-primary' ka.on.click=\"$fn.resolve()\">Save</button>"
        ], {data: []});
    }

    public async show(data : any): Promise<any> {
        // Use the parser to return the data from the scope
        return super.show({data: data}, (scope) => {return scope.data});
    }
}

// Showing the modal and passing data
let userRowModal = new UserRowModal();
let result2 = await userRowModal.show({users: [{name: "John Doe"}, {name: "Jane Doe"}]});
console.log("Save was clicked", result2.users[0].name);
