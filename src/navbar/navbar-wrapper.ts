// language=HTML
import {ka_session_storage, KaCustomWrapper, template} from "@kasimirjs/embed";

const tpl = `

    
`;


export class MenuItem {
    public constructor(
        public label : string,
        public icon : string,
        onclick : () => void,
        public children : MenuItem[] = []) {
    }
}

export class NavbarWrapperConfig {

    public brand : string = "Default <b>Brand</b>";


}


@template(tpl)
export class NavbarWrapper extends KaCustomWrapper {

    constructor(config : NavbarWrapperConfig = null) {
        super();
        if (config === null)
            config = new NavbarWrapperConfig();

        let state = ka_session_storage({active: false}, "switcher-element");
        let scope = this.init({
            state: state,
            config: config,
            $fn: {
                toggle: () => {
                    state.active = ! state.active;
                    scope.render();
                }
            },
            $on: {
                change: (e : any) => {

                }
            }
        });
    }



}
