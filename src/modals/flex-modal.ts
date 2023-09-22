import {KaCustomModal} from "@kasimirjs/embed";



const html = `
<div class="modal d-block" tabindex="-1">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">%%title%%</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" ka.on.click="$fn.close()" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                %%body%%
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" ka.on.click="$fn.close()">Close</button>
                %%buttons%%
            </div>
        </div>
    </div>
</div>`;



export class FlexModalConfig {
    title : string = "unnamed";
    size: "sm" | "lg" | "xl" | "fullscreen" = "xl";
}


export class FlexModal extends KaCustomModal {

    constructor(title : string, body : string, buttons : string[], protected initScope : { } = {}) {
        super();
        this.__html = html.replace("%%title%%", title).replace("%%body%%", body).replace("%%buttons%%", buttons.join(" "));
    }


    public async show(scope : any = {},parser = (scope : any) : any => {return scope}): Promise<any> {
        let defaultScope = this.initScope;

        let instance = this;
        let myScope = this.init({
            ...defaultScope,
            ...scope,
            $fn: {
                async close() {
                    instance.resolve(null);
                },
                async resolve() {
                    instance.resolve(parser(myScope));
                }
            }

        });
        return super.show();
    }
}
