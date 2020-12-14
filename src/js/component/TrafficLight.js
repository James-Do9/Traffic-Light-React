import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		var redStatus = "";
		var yellowStatus = "";
		var greenStatus = "";
		return (
			<div>
				<div id="trafficTop" />
				<div id="trafficContainer">
					<div
						className={
							this.state.clickedLight == "red"
								? "selectedRed red light"
								: "grey light"
						}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={
							this.state.clickedLight == "yellow"
								? "selectedYellow yellow light"
								: "grey light"
						}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={
							this.state.clickedLight == "green"
								? "selectedGreen green light"
								: "grey light"
						}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
