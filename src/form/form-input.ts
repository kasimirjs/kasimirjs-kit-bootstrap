import {KaCustomFragment, KaScope, template} from "@kasimirjs/embed";
import {random_string} from "../functions";


let html = `
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label ka.attr.for="config.id" class="col-form-label">[[ config.title ]]</label>
  </div>
  <div class="col-auto">
    <input ka.if="config.type !== 'select' && config.type !== 'textarea'" ka.attr.readonly="config.readonly === true" ka.attr.type="config.type" ka.id="config.id" ka.bind="%%bind%%" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

`
type KitFormInputConfig = {
    name?: string,
    title?: string,
    type? : string,
    id? : string,
    readonly?: boolean,
}

const KitFormInputDefaults = {
    title: "",
    type: "text",
    id: null as string
}

@template(html)
export class KitFormInput extends KaCustomFragment {

    private bindSelector : string;

    /**
     * Example:
     *
     * new KitFormInput("$scope.name", {title: "Name:"});
     *
     * @param bindSelector
     * @param config
     */
    constructor(bindSelector : string, config : KitFormInputConfig) {
        super();
        this.bindSelector = bindSelector;

        config = {...KitFormInputDefaults, ...config};
        if (config.id === null) {
            config.id = random_string();
        }
        let scope = this.init({
            config,
            bindValue: bindSelector
        });

    }

    init<T extends KaScope>(scope: T): KaScope | T {
        if (typeof this.constructor["html"] !== "undefined")
            this["html"] = (this.constructor['html'] as any).replace("%%bind%%", this.bindSelector) as string;
        return super.init(scope);
    }

}
