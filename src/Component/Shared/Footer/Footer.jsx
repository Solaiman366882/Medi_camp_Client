import logo from "../../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<footer className="section-padding footer-section">
				<div className="max-w-screen-xl mx-auto px-5">
					<div className="footer-area grid grid-cols-4 gap-5">
						<div>
							<div className="flex items-center mb-8">
								<img src={logo} className="w-20" alt="" />
								<span className="self-center whitespace-nowrap text-3xl ml-3 font-semibold text-white dark:text-white">
									Atom
								</span>
							</div>
							<p className="text-white">
								He who has health has hope and he who has hope
								has everything. Lets build wellness rather than
								treat disease.A healthy outside starts from the
								inside.
							</p>
						</div>
						<div>
							<h2 className="text-secondary text-2xl mb-8 font-bold">
								Departments
							</h2>
							<ul className="department-list">
								<li>Surgery & Radiology</li>
								<li>Children Care</li>
								<li>Orthopedics</li>
								<li>Nuclear Magnetic </li>
								<li>Eye Treatment </li>
								<li>X-Ray </li>
							</ul>
						</div>
						<div>
							<h2 className="text-secondary text-2xl mb-8 font-bold">
								Opening Hours
							</h2>
							<ul className="opening-list">
								<li>
									<span>Mon-Tue:</span>
									<span>6:00AM-10:00PM</span>
								</li>
								<li>
									<span>Wed-Thu:</span>
									<span>6:00AM-10:00PM</span>
								</li>
								<li>
									<span>Fry:</span>
									<span>6:00AM-04:00PM</span>
								</li>
								<li>
									<span>Sun:</span>
									<span> Closed</span>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-secondary text-2xl mb-8 font-bold">
								Get In Touch
							</h2>
							<p className="text-white font-semibold">
								Address: 123, Western Road, Melbourne Australia
								<br /> Phone: +822456974 <br /> Email:
								hello@atom.com
							</p>
						</div>
					</div>
				</div>
			</footer>
			<div className="py-5 px-2 bg-[#05224c]">
				<p className="text-center text-white">Copyright @2023 Atom. Designed by AtomDev</p>
			</div>
		</div>
	);
};

export default Footer;
