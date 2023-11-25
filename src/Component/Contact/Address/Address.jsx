import { FaLocationPin } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const Address = () => {
    const position = [51.505, -0.09]
	return (
		<div className="h-[50vh]">
			<div>
				<div>
					<div className="icon">
						<FaLocationPin></FaLocationPin>
					</div>
					<h2>New York</h2>
					<ul>
						<li>88 Flower Avenue. Kingdom St. New York</li>
						<li>Email: hello@atom</li>
						<li>Tel: +822456974</li>
					</ul>
				</div>
				<div className="h-full overflow-hidden">
					<MapContainer
						center={position}
						zoom={13}
						scrollWheelZoom={false}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={position}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default Address;
