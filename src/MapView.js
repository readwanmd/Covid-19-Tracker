import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapView.css';
import { showDataOnMap } from './util';

const MapView = ({ countries, casesType, center, zoom }) => {
	// console.log(countries);
	return (
		<div className="map">
			<MapContainer center={center} zoom={zoom}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{showDataOnMap(countries, casesType)}
			</MapContainer>
		</div>
	);
};

export default MapView;
