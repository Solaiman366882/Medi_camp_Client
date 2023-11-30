import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";
import { IoStar } from "react-icons/io5";

const SliderComponent = ({ feedback }) => {
	let settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="overflow-hidden max-w-5xl mx-auto">
			<Slider {...settings}>
				{feedback?.map((feed) => (
					<div className="single-slider" key={feed._id}>
						<div className="feedback-img">
							<img src={feed.photo} alt="" />
							<div className="my-4 text-center">
								<Rating
									initialRating={parseInt(feed.ratings)}
									readonly
									emptySymbol={<IoStarOutline className="text-secondary h-10 w-8" />}
									fullSymbol={<IoStar className="text-secondary h-10 w-8" />}
								/>
							</div>
							<h2 className="text-center font-bold capitalize text-2xl mb-5">
								{feed.user}
							</h2>
						</div>
						<div>
							<p className="text-base text-pera font-medium text-center px-7">
								{feed.feedback}
							</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};
SliderComponent.propTypes = {
	feedback: PropTypes.array,
};
export default SliderComponent;
