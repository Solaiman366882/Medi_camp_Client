import { Link } from "react-router-dom";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";
import SocialLogin from "../../Component/Shared/SocialLogin/SocialLogin";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Schemas";


const Register = () => {
	const initialValues = {
		name: "",
		email: "",
		// profile_img: {},
		password: "",
		confirm_password: "",
	};

	const { values, handleSubmit, errors, handleBlur, handleChange,touched } =
		useFormik({
			initialValues: initialValues,
			validationSchema: SignUpSchema,
			onSubmit: (values) => {
				console.log(values);
			},
		});
	//console.log("formik data", formik);

	return (
		<div className="w-full section-padding">
			<div className="max-w-screen-xl mx-auto px-5">
				<div>
					<SectionTitle
						subTitle="Register"
						title="Create an account!"
					></SectionTitle>
				</div>
				<div className="login-area grid grid-cols-2 gap-6 mt-12">
					<div className="form-area ">
						<div>
							<SocialLogin></SocialLogin>
						</div>
						<form
							onSubmit={handleSubmit}
							className="grid grid-cols-1 gap-5"
						>
							<div className="single-input">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									placeholder="Your Name"
									name="name"
									id="name"
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.name && touched.name ? <p className="text-red-700 mt-2">{errors.name}</p>:null}
							</div>
							<div className="single-input">
								<label htmlFor="email">email</label>
								<input
									type="email"
									placeholder="Your Email"
									name="email"
									id="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.email && touched.email ? <p className="text-red-700 mt-2">{errors.email}</p>:null}
							</div>
							{/* <div className="single-input">
								<label htmlFor="profile_img">
									Profile Picture
								</label>
								<input
									type="file"
									name="profile_img"
									id="profile_img"
									placeholder="Your Image"
									value={values.profile_img}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div> */}
							<div className="single-input">
								<label htmlFor="password"> password</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Your Password"
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.password && touched.password ? <p className="text-red-700 mt-2">{errors.password}</p>:null}
							</div>
							<div className="single-input">
								<label htmlFor="confirm_password">
									{" "}
									Confirm password
								</label>
								<input
									type="password"
									name="confirm_password"
									id="confirm_password"
									placeholder="Confirm Password"
									value={values.confirm_password}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.confirm_password && touched.confirm_password ? <p className="text-red-700 mt-2">{errors.confirm_password}</p>:null}
							</div>
							<div className="text-center mt-5">
								<button className="btn" type="submit">
									Login Now
								</button>
							</div>
						</form>
						<div>
							<div className="mt-3">
								<p className=" text-primary font-semibold text-center">
									Not a member?{" "}
									<Link className="text-secondary ml-3">
										Register
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="register-img"></div>
				</div>
			</div>
		</div>
	);
};

export default Register;
