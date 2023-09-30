import {customElement, KaCustomElement} from "@kasimirjs/embed";

// language=HTML
const tpl = `
    <div class="mb-1 row" ka.if="type === 'text'">
        <label ka.attr.for="id" class="col-sm-2 col-form-label">[[label]]</label>
        <div class="col-sm-10">
          <input type="text" ka.bind="$scope.value" class="form-control-plaintext form-control-sm bg-white" ka.attr.id="id">
        </div>
    </div>
    <div class="form-check form-switch mb-1" ka.if="type === 'switch'">
      <input class="form-check-input" type="checkbox" ka.bind="$scope.value" role="switch" ka.attr.id="id">
      <label class="form-check-label" ka.attr.for="id">[[ label ]]</label>
    </div>

`;

var elementIndex = 1;


@customElement("quick-input", tpl)
class QuickInput extends KaCustomElement {


    get value () {
        return this.scope.value;
    }

    set value (value) {
        this.scope.value = value;
    }


    async connectedCallback(): Promise<void> {

        let scope = this.init({
            id: this.dataset.id ?? "quick-form-element-" + elementIndex++,
            type: this.dataset.type ?? "text",
            name: this.dataset.name ?? "data-name unset",
            label: this.dataset.label ?? this.dataset.name ?? "data-label unset",
            $on : {
                change: (e) => {
                    //this.dispatchEvent(new Event("change"));
                }
            }
        });
        super.connectedCallback();
    }
}
