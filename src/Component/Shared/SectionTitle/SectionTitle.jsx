import PropTypes from "prop-types";
const SectionTitle = ({ title, subTitle }) => {
	return (
		<div className="w-full px-5 text-center">
			<div className="max-w-screen-sm mx-auto">
				<h3 className="font-semibold text-secondary mb-3 capitalize">
					{subTitle || ""}
				</h3>
				<h2 className="font-bold text-primary text-4xl mb-4 capitalize">
					{title || ""}
				</h2>
				<p className="font-bold text-pera ">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Eaque quibusdam deleniti porro praesentium. Aliquam minus
					quisquam velit in at nam.
				</p>
			</div>
		</div>
	);
};

SectionTitle.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

export default SectionTitle;
