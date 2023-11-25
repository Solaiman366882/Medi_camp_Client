import "./Quality.css";
import docIcon from "../../../assets/images/Quality/1.png";
import helIcon from "../../../assets/images/Quality/2.png";
import leadIcon from "../../../assets/images/Quality/3.png";
import { FaPlus } from "react-icons/fa6";
const Quality = () => {
	return (
		<div className="section-padding bg-white w-full">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="grid grid-cols-3 gap-5">
					<div className="q-card">
						<div className="card-img">
							<img src={docIcon} alt="" />
						</div>
						<h2>Qualified Doctors</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore.
						</p>
                        <span className="read"><span>Read more</span> <FaPlus /></span>
					</div>
					<div className="q-card">
						<div className="card-img">
							<img src={helIcon} alt="" />
						</div>
						<h2>Emergency Helicopter</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore.
						</p>
                        <span className="read"><span>Read more</span> <FaPlus /></span>
					</div>
					<div className="q-card">
						<div className="card-img">
							<img src={leadIcon} alt="" />
						</div>
						<h2>Leading Technology</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore.
						</p>
                        <span className="read"><span>Read more</span> <FaPlus /> </span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quality;
