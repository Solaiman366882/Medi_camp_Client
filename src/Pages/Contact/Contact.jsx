// import Address from "../../Component/Contact/Address/Address";
import PageBanner from "../../Component/Shared/PageBanner/PageBanner";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";

const Contact = () => {
	return (
		<div>
			<div>
				<PageBanner title="contact" subTitle="contact"></PageBanner>
			</div>
			<div>{/* <Address></Address> */}</div>
			<div className="section-padding">
				<div className="max-w-screen-xl mx-auto px-5">
					<div>
						<SectionTitle
							subTitle="Contact Us"
							title="Drop us a message for any query"
						></SectionTitle>
					</div>
					<div>
						<div className="form-area">
							<form>
								<div className="grid grid-cols-2 gap-6">
									<div className="single-input">
										<label htmlFor="name">name</label>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Your Name"
										/>
									</div>
									<div className="single-input">
										<label htmlFor="email">email</label>
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Your Email"
										/>
									</div>
									<div className="single-input">
										<label htmlFor="phone">phone</label>
										<input
											type="tel"
											name="phone"
											id="phone"
											placeholder="Your Phone"
										/>
									</div>
									<div className="single-input">
										<label htmlFor="subject">subject</label>
										<input
											type="text"
											name="subject"
											id="subject"
											placeholder="your subject"
										/>
									</div>
									<div className="single-input col-span-2">
										<label htmlFor="message">message</label>
										<textarea
											name="message"
											id="message"
											cols="30"
											rows="10"
											placeholder="your message"
										></textarea>
									</div>
								</div>
								<div className="mt-7 flex justify-between items-center">
									<div>
										<h3 className="text-primary font-bold text-2xl mb-2">For Emergency</h3>
										<a href="tel:+442-456a-789" className="text-secondary text-base font-semibold hover:text-primary">
											+442-456a-789
										</a>
									</div>
									<input
										type="submit"
										value="Send Message"
										className="btn"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
