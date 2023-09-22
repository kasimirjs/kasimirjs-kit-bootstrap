// language=HTML
import {ka_session_storage, KaCustomWrapper, KaScope, template} from "@kasimirjs/embed";

const tpl = `
    <style>
        .sidepanel {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            border: 0;
            width: 250px;
            z-index: 99999;
            transform: translateX(100%);
            transition: all 0.3s ease-in-out;


            background: linear-gradient(0deg, rgb(37, 32, 32) 0%, rgba(0, 0, 0, 1) 100%);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            padding: 5px
        }

        .sidepanel .activator {
            position: absolute;
            top: 38vh;
            height: 50px;
            width: 50px;
            left: -50px;
            cursor: pointer;
            background: linear-gradient(90deg, rgb(68, 63, 63) 0%, rgba(0, 0, 0, 1) 100%);
            z-index: 99999;
            color: #fff;
            border-radius: 20% 0 0 20%;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
            opacity: 0.8;
            transition: opacity 0.3s ease-in-out;
        }

        .sidepanel .activator svg {
            width: 100%;
            height: 100%;
            padding: 10px
        }

        .sidepanel.active .activator {
            opacity: 0.8;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
        }

        .sidepanel .activator:hover {
            opacity: 1;
        }

        .sidepanel.active {
            transform: translateX(0);
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
        }

        .sidepanel .content {
            color: #fff;
            height: 100%;
            overflow: scroll;
        }

    </style>

    <nav class="sidepanel" ka.classlist.active="state.active">
        <div class="activator" ka.on.click="$fn.toggle()" ka.content="$scope.config.icon">B</div>
        <div class="content">
            <div ka.content="$content"></div>
        </div>
    </nav>
`;



export class SidebarWrapperConfig {
    public icon: string = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>`;
}


@template(tpl)
export class SidebarWrapper extends KaCustomWrapper {

    constructor(config : SidebarWrapperConfig = null) {
        super();
        if (config === null)
            config = new SidebarWrapperConfig();

        let state = ka_session_storage({active: false}, "switcher-element");
        let scope : KaScope = this.init({
            state: state,
            config: config,
            $fn: {
                toggle: () => {
                    state.active = ! state.active;
                    scope.render();
                }
            },
            $on: {
                change: (e) => {

                }
            }
        });
    }



}
