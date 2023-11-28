import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./CampCard.css"
const CampCard = ({ camp }) => {
	const {
		camp_name,
		camp_img,
		start_date,
		end_date,
		venue,
		camp_fees,
		camp_services,
		audience,
		camp_professionals,
		_id
	} = camp || {};
	return (
		<div className="camp-card">
			<div className="card-img">
				<img src={camp_img} className="w-full h-52 object-cover" alt="" />
			</div>
			<div className="card-body p-6">
				<div className="flex justify-between items-center mb-3">
					<p className="text-pera text-sm font-semibold">{start_date}</p>
					<p className="text-secondary text-lg font-semibold"> --- To --- </p>
					<p className="text-pera text-sm font-semibold">{end_date}</p>
				</div>
				<h2 className="text-xl font-bold text-primary">{camp_name}</h2>
				<div className="flex justify-between items-center my-4">
					<p className="text-sm text-primary font-semibold capitalize">venue: {venue}</p>
					<p className="text-sm text-primary font-semibold capitalize">fees : ${camp_fees} only</p>
				</div>
				<div className="">
					<h3 className="text-pera font-medium">Services will provide : {camp_services}</h3>
				</div>
				<div className="my-3">
					<h4 className="text-pera font-medium">Healthcare Professional: {camp_professionals}</h4>
				</div>
				<div>
					<p className="text-primary">Target Audience : {audience}</p>
				</div>
				<div className="mt-3">
					<Link className="read" to={`/camp-details/${_id}`}>
						<span>Read More</span> <FaPlus className="icon"></FaPlus>
					</Link>
				</div>
			</div>
		</div>
	);
};

CampCard.propTypes = {
	camp: PropTypes.object.isRequired,
};

export default CampCard;
