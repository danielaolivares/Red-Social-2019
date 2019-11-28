import { init } from "./js/init.js";
import { beginsViews } from "./beginsViews/beginViews.js";
const start = () => {
    init();
    beginsViews();    
}
window.addEventListener('load', start);