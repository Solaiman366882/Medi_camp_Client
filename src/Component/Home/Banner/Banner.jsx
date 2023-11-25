import "./Banner.css";
import docImg from "../../../assets/images/banner-img.png";
import shapeImg from "../../../assets/images/banner-shape.png";
const Banner = () => {
	return (
		<div className="Banner-section">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="flex justify-between gap-10 items-center">
					<div className="banner-left flex-1">
						<h3 className="text-secondary mb-5 font-semibold">
							Smarter Service Care
						</h3>
						<h2 className="text-white text-6xl mb-6 font-bold">
							We are Committed to Your Best Health
						</h2>
						<p className="text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua gravida. Risus commodo. Book An
							Appointment Play Now
						</p>
					</div>
					<div className="banner-right relative flex-1 h-[90vh]">
						<div className="banner-img-wrap">
							<img src={docImg} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="banner-shape">
					<img src={shapeImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
