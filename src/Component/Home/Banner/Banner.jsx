import "./Banner.css";
import docImg from "../../../assets/images/banner-img.png";
import shapeImg from "../../../assets/images/banner-shape.png";
const Banner = () => {
	return (
		<div className="Banner-section">
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="flex justify-between gap-10 items-center h-full">
					<div className="banner-left flex-1 flex flex-col justify-center h-[90vh]">
						<h3 className="text-secondary mb-5 font-semibold">
							Smarter Service Care
						</h3>
						<h2 className="text-white text-6xl mb-6 font-bold">
							We are Committed <br /> to Your Best Health
						</h2>
						<p className="text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod <br /> tempor incididunt ut labore et
							dolore magna aliqua gravida. Risus commodo. 
						</p>
						<div className="mt-8 flex gap-6">
							<button className="btn">Book an Appointment</button>
							<button className="btn">Play Now</button>
						</div>
					</div>
				</div>
			</div>
			<div>
			<div className="banner-img-wrap">
							<img src={docImg} alt="" />
						</div>
				<div className="banner-shape hidden md:block">
					<img src={shapeImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
