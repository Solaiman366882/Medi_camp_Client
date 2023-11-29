import { FaPlus, FaWheelchair } from "react-icons/fa6";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./ServiceSection.css";
import { GrUserManager } from "react-icons/gr";
import { GiBrain, GiKidneys, GiLiver } from "react-icons/gi";
import { BsHeartPulse } from "react-icons/bs";

const ServiceSection = () => {
	return (
		<div className="service-section section-padding">
			<div>
				<SectionTitle
					title="Our Healthcare Service"
					subTitle="Our Services"
				></SectionTitle>
			</div>
			<div className="max-w-screen-xl mx-auto px-5">
				<div className="mt-12 grid grid-cols-3 gap-5">
					<div className="service-card">
						<div className="card-icon-area">
							<div className="icon-wrap">
								<GrUserManager className="card-icon"/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="">Cancer Service</h2>
							<p className="pera">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore dolore
							</p>
							<p className="read">
								<span>Read</span> <FaPlus></FaPlus>
							</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-icon-area">
							<div className="icon-wrap">
								<GiLiver className="card-icon"/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="">Liver Transport</h2>
							<p className="pera">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore dolore
							</p>
							<p className="read">
								<span>Read</span> <FaPlus></FaPlus>
							</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-icon-area">
							<div className="icon-wrap">
								<GiKidneys className="card-icon"/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="">Kidney Transport</h2>
							<p className="pera">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore dolore
							</p>
							<p className="read">
								<span>Read</span> <FaPlus></FaPlus>
							</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-icon-area">
							<div className="icon-wrap">
								<BsHeartPulse className="card-icon"/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="">Cardiac Arrhythmia</h2>
							<p className="pera">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore dolore
							</p>
							<p className="read">
								<span>Read</span> <FaPlus></FaPlus>
							</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-icon-area">
							<div className="icon-wrap">
								<GiBrain className="card-icon"/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="">Neurology Care</h2>
							<p className="pera">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore dolore
							</p>
							<p className="read">
								<span>Read</span> <FaPlus></FaPlus>
							</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-icon-area">
							<div className="icon-wrap">
								<FaWheelchair className="card-icon"/>
							</div>
						</div>
						<div className="card-body">
							<h2 className="">Orthopedic Care</h2>
							<p className="pera">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore dolore
							</p>
							<p className="read">
								<span>Read</span> <FaPlus></FaPlus>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
