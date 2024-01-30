import {FlexModal} from "./flex-modal";


export class FormFlexModalFormConfig {
    type: "text" | "switch" | "textarea" = "text";

    name: string|null = null;
    id: string|null = null;
    label: string|null = null;
    desc: string|null = null;
    bind: string = null;
}
export class FormFlexModalConfig {
    title : string = "unnamed";
    size: "sm" | "lg" | "xl" | "fullscreen" = "xl";

    forms : FormFlexModalFormConfig[] = [];
}


const html = `

    <div ka.for="let c of config.forms" class="mb-3">
        <label ka.attr.for="c.id" class="form-label">[[ c.label ]]</label>
        <input ka.if="type==='text'" type="text" class="form-control" ka.attr.id="c.id" ka.attr.aria-describedby="c.id + '-desc'">
        <textarea ka.if="type==='textarea'" type="text" class="form-control" ka.attr.id="c.id" ka.attr.aria-describedby="c.id + '-desc'"></textarea>
        <div ka.attr.id="c.id + '-desc'" class="form-text">[[ c.desc ]]</div>
    </div>
`



export class FormFlexModal extends FlexModal {


    constructor(title : string, forms : FormFlexModalFormConfig[] = []) {
        super(title, html, []);
    }


    /**
     *
     *
     * @param scope     Optional Scope to pass to the modal
     * @param parser    Optional Callback to parse the return value before resolving the promise
     */
    public async show(scope : any = {},parser = (scope : any) : any => {return scope}): Promise<any> {
        super.show(scope, parser);
    }
}
