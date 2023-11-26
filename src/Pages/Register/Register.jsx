import { Link } from "react-router-dom";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";
import SocialLogin from "../../Component/Shared/SocialLogin";

const Register = () => {
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
					<div className="form-area grid grid-cols-1 gap-5">
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
						<div className="single-input">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								placeholder="Your Name"
								name="name"
								id="name"
							/>
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
							<label htmlFor="profile_img">Profile Picture</label>
							<input
								type="file"
								name="profile_img"
								id="profile_img"
								placeholder="Your Image"
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
						<div className="single-input">
							<label htmlFor="confirm_password"> password</label>
							<input
								type="password"
								name="confirm_password"
								id="confirm_password"
								placeholder="Confirm Password"
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
					<div className="register-img"></div>
				</div>
			</div>
		</div>
	);
};

export default Register;
