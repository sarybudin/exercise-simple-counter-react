import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./seconds-counter.jsx";

//create your first component
const Home = props => {
	return <div id="myDiv"></div>;
};
Home.propTypes = {
	seconds: PropTypes.number
};
export default Home;
