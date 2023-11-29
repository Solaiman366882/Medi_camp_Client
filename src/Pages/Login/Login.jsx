import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";
import { useFormik } from "formik";
import SocialLogin from "../../Component/Shared/SocialLogin/SocialLogin";
import { LoginSchema } from "../../Schemas";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
	const { userLogin } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const initialValues = {
		email: "",
		password: "",
	};
	const { handleSubmit, errors, handleChange, handleBlur, touched, values } =
		useFormik({
			initialValues: initialValues,
			validationSchema: LoginSchema,
			onSubmit: (values) => {
				userLogin(values.email, values.password)
					.then(() => {
						navigate(location?.state ? location.state : "/");
						Swal.fire("Good job!", "Login Successfully", "success");
					})
					.catch((err) => console.log(err));
			},
		});
	return (
		<div className="w-full section-padding">
			<Helmet><title>Atom | Login</title></Helmet>
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
						<form
							onSubmit={handleSubmit}
							className="grid grid-cols-1 gap-5"
						>
							<div className="single-input">
								<label htmlFor="email">email</label>
								<input
									type="email"
									placeholder="Your Email"
									name="email"
									id="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
								{errors.email && touched.email ? (
									<p className="text-red-700 mt-3">
										{errors.email}
									</p>
								) : null}
							</div>
							<div className="single-input">
								<label htmlFor="password"> password</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Your Password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
								{errors.password && touched.password ? (
									<p className="text-red-700 mt-3">
										{errors.password}
									</p>
								) : null}
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
						</form>
					</div>
					<div className="login-img"></div>
				</div>
			</div>
		</div>
	);
};

export default Login;
