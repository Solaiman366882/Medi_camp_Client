import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";
import SocialLogin from "../../Component/Shared/SocialLogin/SocialLogin";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Schemas";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const Register = () => {
	const axiosPublic = useAxiosPublic();
	const img_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
	const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_api_key}`;
	const navigate = useNavigate();
	const { createUser, updateUserProfile } = useAuth();

	const initialValues = {
		name: "",
		email: "",
		profile_img: null,
		password: "",
		confirm_password: "",
	};

	const {
		values,
		handleSubmit,
		errors,
		handleBlur,
		handleChange,
		touched,
		setFieldValue,
	} = useFormik({
		initialValues: initialValues,
		validationSchema: SignUpSchema,
		onSubmit: async (values) => {
			const imgFile = { image: values.profile_img };
			const res = await axiosPublic.post(img_hosting_api, imgFile, {
				headers: {
					"content-type": "multipart/form-data",
				},
			});
			const photo = res.data.data.display_url;
			createUser(values.email, values.password).then(() => {
				updateUserProfile(values.name, photo)
					.then(() => {
						const userInfo = {
							name: values.name,
							email: values.email,
							password: values.password,
							role: "participants",
							photo: photo,
						};
						axiosPublic.post("/users", userInfo).then((res) => {
							if (res.data.insertedId) {
								Swal.fire({
									icon: "success",
									title: "Your Account successfully created",
									showConfirmButton: false,
									timer: 2000,
								});
								navigate("/");
							}
						});
					})
					.catch((error) => console.log(error));
			});
		},
	});
	return (
		<div className="w-full section-padding">
			<Helmet>
				<title>Atom | Register</title>
			</Helmet>
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
								{errors.name && touched.name ? (
									<p className="text-red-700 mt-2">
										{errors.name}
									</p>
								) : null}
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
								{errors.email && touched.email ? (
									<p className="text-red-700 mt-2">
										{errors.email}
									</p>
								) : null}
							</div>
							<div className="single-input">
								<label htmlFor="profile_img">
									Profile Picture
								</label>
								<input
									type="file"
									name="profile_img"
									id="profile_img"
									placeholder="Your Image"
									onChange={(e) => {
										setFieldValue(
											"profile_img",
											e.currentTarget.files[0]
										);
									}}
									onBlur={handleBlur}
								/>
							</div>
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
								{errors.password && touched.password ? (
									<p className="text-red-700 mt-2">
										{errors.password}
									</p>
								) : null}
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
								{errors.confirm_password &&
								touched.confirm_password ? (
									<p className="text-red-700 mt-2">
										{errors.confirm_password}
									</p>
								) : null}
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
