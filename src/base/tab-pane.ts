
import {customElement, KaCustomElement, KaCustomFragment, KaScope, template} from "@kasimirjs/embed";


// language=html
const html = `
 <div class="h-100">
    <ul class="nav nav-tabs">
      <li class="nav-item" ka.for="let tabName in tabs">
        <a class="nav-link" ka.classlist.fw-bold="selectedTabName === tabName" ka.classlist.active="selectedTabName === tabName" ka.on.click="$scope.selectedTabName = tabName" aria-current="page" href="javascript:void(0)">[[ tabName ]]</a>
      </li>
    </ul>
     <div class="p-3 border">
         <div ka.for="let curTabName in tabs">
             <div ka.if="curTabName === selectedTabName" >
                 <div ka.content="tabs[curTabName]"></div>
             </div>
         </div>
     </div>
    
</div>
`
type KitTabs = {
    [tabName : string]: HTMLElement | KaCustomFragment
}

@customElement()
@template(html)
export class KitTabPane extends KaCustomElement {

    constructor(
        public tabs : KitTabs
    ) {
        super();
        let scope = this.init({
            targetScope: null,
            tabs,
            selectedTabName : Object.keys(tabs)[0]
        })
    }

    public updateTabs(tabs : KitTabs) {
        this.scope.selectedTabName = Object.keys(tabs)[0];
        this.scope.tabs = tabs;
        this.scope.render();
    }


    public setScope(scope: KaScope) {
        // Override default behaviou and pass scope to next
        this.scope["targetScope"] = scope;
    }
}
