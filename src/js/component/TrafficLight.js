import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ clickedLight: "red" });
		}, 2000);
	}
	componentDidUpdate() {
		if (this.state.clickedLight == "green") {
			setInterval(() => {
				this.setState({ clickedLight: "yellow" });
			}, 2000);
		} else if (this.state.clickedLight == "yellow") {
			setInterval(() => {
				this.setState({ clickedLight: "red" });
			}, 2000);
		} else {
			setInterval(() => {
				this.setState({ clickedLight: "green" });
			}, 2000);
		}
	}
	render() {
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
						//onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={
							this.state.clickedLight == "yellow"
								? "selectedYellow yellow light"
								: "grey light"
						}
						//onClick={() => this.setState({ clickedLight: "yellow" })}
					/>
					<div
						className={
							this.state.clickedLight == "green"
								? "selectedGreen green light"
								: "grey light"
						}
						//onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
