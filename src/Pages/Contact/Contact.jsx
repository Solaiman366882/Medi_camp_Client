// import Address from "../../Component/Contact/Address/Address";
import { useFormik } from "formik";
import PageBanner from "../../Component/Shared/PageBanner/PageBanner";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";
import { ContactSchema } from "../../Schemas";
import { Helmet } from "react-helmet";

const Contact = () => {


	const initialValues = {
		name:"",
		email:"",
		phone:"",
		subject:"",
		message:"",
	}

	const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({
		initialValues:initialValues,
		validationSchema:ContactSchema,
		onSubmit: values => {
			console.log(values);
		}
	})

	return (
		<div>
			<Helmet><title>Atom | Contact</title></Helmet>
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
						<div className="form-area mt-14">
							<form onSubmit={handleSubmit}>
								<div className="grid grid-cols-2 gap-6">
									<div className="single-input">
										<label htmlFor="name">name</label>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Your Name"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.name}
										/>
										{errors.name && touched.name ? <p className="mt-3 text-red-700">{errors.name}</p> : null}
									</div>
									<div className="single-input">
										<label htmlFor="email">email</label>
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Your Email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
										/>
										{errors.email && touched.email ? <p className="mt-3 text-red-700">{errors.email}</p>:null}
									</div>
									<div className="single-input">
										<label htmlFor="phone">phone</label>
										<input
											type="tel"
											name="phone"
											id="phone"
											placeholder="Your Phone"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.phone}
										/>
										{errors.phone && touched.phone ? <p className="mt-3 text-red-700">{errors.phone}</p> : null}
									</div>
									<div className="single-input">
										<label htmlFor="subject">subject</label>
										<input
											type="text"
											name="subject"
											id="subject"
											placeholder="your subject"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.subject}
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
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.message}
										></textarea>
										{errors.message && touched.message ? <p className="mt-3 text-red-700">{errors.name}</p>:null}
									</div>
								</div>
								<div className="mt-7 flex justify-between items-center">
									<div>
										<h3 className="text-primary font-bold text-2xl mb-2">For Emergency</h3>
										<a href="tel:+442-456a-789" className="text-secondary text-base font-semibold hover:text-primary">
											+442-456a-789
										</a>
									</div>
									<button className="btn" type="submit">Send Message</button>
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
