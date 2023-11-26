import { Link } from "react-router-dom";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";
import SocialLogin from "../../Component/Shared/SocialLogin";
 import { Formik } from 'formik';

const Login = () => {
	return (
		<div className="w-full section-padding">
			<div className="max-w-screen-xl mx-auto px-5">
				<div>
					<SectionTitle
						subTitle="Login"
						title="Log In to your account!"
					></SectionTitle>
				</div>
				<div className="login-area grid grid-cols-2 gap-6 mt-12">
					<div className="form-area grid grid-cols-1 gap-5">
						<div>
							<SocialLogin></SocialLogin>
						</div>
						<div className="single-input">
							<label htmlFor="email">email</label>
							<input
								type="email"
								placeholder="Your Email"
								name="email"
								id="email"
							/>
						</div>
						<div className="single-input">
							<label htmlFor="password"> password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Your Password"
							/>
						</div>
						<div>
							<div className="text-center">
								<button className="btn" type="submit">
									Login Now
								</button>
							</div>
							<div>
								<p className="mt-5 text-primary font-semibold text-center">
									Not a member?{" "}
									<Link className="text-secondary ml-3">
										Register
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="login-img"></div>
				</div>
				<Formik
					initialValues={{ email: "", password: "" }}
					validate={(values) => {
						const errors = {};
						if (!values.email) {
							errors.email = "Required";
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
								values.email
							)
						) {
							errors.email = "Invalid email address";
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit}>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && errors.email}
							<input
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{errors.password &&
								touched.password &&
								errors.password}
							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Login;
