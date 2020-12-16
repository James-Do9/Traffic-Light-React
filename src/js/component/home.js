import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<div id="trafficTop" />
				<div id="trafficContainer">
					<div
						className={
							this.props.clickedLight == "red"
								? "selectedRed red light"
								: "grey light"
						}
						//onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={
							this.props.clickedLight == "yellow"
								? "selectedYellow yellow light"
								: "grey light"
						}
						//onClick={() => this.setState({ clickedLight: "yellow" })}
					/>
					<div
						className={
							this.props.clickedLight == "green"
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
Home.propTypes = {
	clickedLight: PropTypes.string
};
