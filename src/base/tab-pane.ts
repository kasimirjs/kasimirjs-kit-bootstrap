
import {KaCustomFragment, template} from "@kasimirjs/embed";


// language=html
const html = `
 <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" ka.for="let tabName in tabs">
        <a class="nav-link active" ka.on.click="$scope.selectedTabName = tabName" aria-current="page">[[ tabName ]]</a>
      </li>
    </ul>
    <div ka.for="let curTabName in tabs">
        
        <ka-use ka.if="curTabName === selectedTabName" ka.use="tabs[curTabName]"></ka-use>
    </div>
</div>
`
type KitTabs = {
    [tabName : string]: HTMLElement | KaCustomFragment
}
@template(html)
export class KitTabPane extends KaCustomFragment {

    selectedTabName: string

    constructor(
        public tabs : KitTabs
    ) {
        super();

        this.init({
            tabs,
            selectedTabName : Object.keys(tabs)[0]
        })
    }
}
