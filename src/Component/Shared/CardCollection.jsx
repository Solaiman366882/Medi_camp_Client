import CampCard from "./CampCard/CampCard";
import PropTypes from "prop-types";

const CardCollection = ({ camps }) => {
	return (
		<div className="max-w-screen-xl mx-auto px-5">
			<div className="grid grid-cols-3 gap-5">
				{camps?.map((camp) => (
					<CampCard key={camp._id} camp={camp}></CampCard>
				))}
			</div>
		</div>
	);
};

CardCollection.propTypes = {
	camps: PropTypes.array,
};

export default CardCollection;
