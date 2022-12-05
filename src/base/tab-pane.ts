
import {KaCustomFragment, KaScope, template} from "@kasimirjs/embed";


// language=html
const html = `
 <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" ka.for="let tabName in tabs">
        <a class="nav-link" ka.classlist.fw-bold="selectedTabName === tabName" ka.classlist.active="selectedTabName === tabName" ka.on.click="$scope.selectedTabName = tabName" aria-current="page" href="javascript:void(0)">[[ tabName ]]</a>
      </li>
    </ul>
     <div class="p-3 border">
         <div ka.for="let curTabName in tabs">
             <ka-use ka.if="curTabName === selectedTabName" ka.use="tabs[curTabName]" ka.scope="targetScope"></ka-use>
         </div>
     </div>
    
</div>
`
type KitTabs = {
    [tabName : string]: HTMLElement | KaCustomFragment
}
@template(html)
export class KitTabPane extends KaCustomFragment {

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

    public setScope(scope: KaScope) {
        // Override default behaviou and pass scope to next
        this.scope["targetScope"] = scope;
    }
}
