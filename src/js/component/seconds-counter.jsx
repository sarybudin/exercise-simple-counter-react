import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const DivSecond = props => {
	return <div className="div-second">{props.num}</div>;
};
DivSecond.propTypes = {
	num: PropTypes.number
};

const SecondsCounter = props => {
	let cero = 6 - ("" + props.seconds).length;
	let final = ["", "0", "00", "000", "0000", "00000", "000000"];
	let str = final[cero] + props.seconds;
	let divs = [];

	for (let i = 0; i < str.length; i++) {
		divs.push(<DivSecond num={str[i]} />);
	}

	return (
		<div className="second">
			<div className="div-second">
				<i className="far fa-clock"></i>
			</div>

			{divs}
		</div>
	);
};
SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

let second = 0;
setInterval(() => {
	ReactDOM.render(
		<SecondsCounter seconds={second} />,
		document.querySelector("#myDiv")
	);
	second++;
}, 1000);
