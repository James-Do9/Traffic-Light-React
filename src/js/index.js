//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
//render your react application
var clickedLight = "";
function changeLights() {
	if (clickedLight == "green") {
		clickedLight = "yellow";
	} else if (clickedLight == "yellow") {
		clickedLight = "red";
	} else {
		clickedLight = "green";
	}
	ReactDOM.render(
		<Home clickedLight={clickedLight} />,
		document.querySelector("#app")
	);
}
setInterval(changeLights, 1000);
