import Generic from "./../components/Generic";
import Buttons from "./../components/Buttons";
import Inputs from "../components/Inputs";
import Dropdowns from "../components/Dropdowns";
import Tooltips from "../components/Tooltips";
import Badges from "../components/Badges";
import Checkboxes from "../components/Checkboxes";
import Switches from "../components/Switches";
import Alerts from "../components/Alerts";
import Progresses from "../components/Progress";
export const sidebar = [
    {id:1, title: "Buttons", path: "/buttons", element: <Buttons/>},
    {id:2, title: "Inputs", path: "/inputs", element: <Inputs/>},
    {id:3, title: "Dropdown", path: "/dropdown", element: <Dropdowns/>},
    {id:3, title: "Tooltip", path: "/tooltip", element: <Tooltips/>},
    {id:3, title: "Badge", path: "/badge", element: <Badges/>},
    {id:3, title: "Checkbox", path: "/checkbox", element: <Checkboxes/>},
    {id:3, title: "Switch", path: "/switch", element: <Switches/>},
    {id:3, title: "Alert", path: "/alert", element: <Alerts/>},
    {id:3, title: "Progress", path: "/progress", element: <Progresses/>},
]

