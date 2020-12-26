import React, { useEffect, useState } from 'react';
import Line from 'react-chartjs-2';
const LineGraph = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
			.then((res) => res.json())
			.then((data) => {
				console.log('graph data>>>>>', data);
			});
	}, []);

	return <div>{/* <Line data options /> */}</div>;
};

export default LineGraph;
