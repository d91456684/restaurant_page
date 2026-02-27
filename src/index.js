import "./styles.css";

import { generateHome } from "../home";
import { generateAbout } from "../about";
import { generateMenu } from "../menu";
generateHome()

addEventListener("click", (event) => {
    let target = event.target
    console.log(target)
    switch(target.className) {
        case "home":
            generateHome()
            break;
        case "menu":
            generateMenu()
            break;
        case "about":
            generateAbout()
            break;
    }
})