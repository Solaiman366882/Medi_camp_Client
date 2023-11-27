import * as Yup from "yup";

//register schema
export const SignUpSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(30, "Too Long!")
		.required("*Required"),
	password: Yup.string()
		.min(6, "password at least 6")
		.required("*Required")
		.matches(
			"^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{6,}$",
			"Must Contain One Uppercase, One Lowercase, One Number and one special Character"
		),
	confirm_password: Yup.string()
		.required("*Required")
		.oneOf([Yup.ref("password"), null], "Password Must Match"),
	email: Yup.string().email("Invalid Email").required("*Required"),
});

//login schema
export const LoginSchema = Yup.object().shape({
	email: Yup.string().email("Invalid Email").required("*Required"),
	password: Yup.string()
		.min(6, "password at least 6")
		.required("*Required")
		.matches(
			"^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{6,}$",
			"Must Contain One Uppercase, One Lowercase, One Number and one special Character"
		),
});

// Contact Schema
export const ContactSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(30, "Too Long!")
		.required("*Required"),
	email: Yup.string().email("Invalid Email").required("*Required"),
	phone: Yup.number()
		.typeError("That doesn't look like a phone number")
		.positive("Can't start with a minus")
		.integer("Can't include a decimal point")
		.min(8)
		.required("Phone number is required"),
	message: Yup.string()
		.min(10, "Must have 10 character")
		.required("*Required"),
});

//add camp schema
export const CampSchema = Yup.object().shape({
	camp_name: Yup.string()
		.min(30, "You have enter minimum 30 characters")
		.required("Required"),
	camp_fees: Yup.string().required("Required"),
	start_date: Yup.date().required("Starting Date is required"),
	end_date: Yup.date().required("Ending date is Required"),
	camp_professionals: Yup.string().required("*Required"),
	venue: Yup.string().required("*Required"),
	camp_services: Yup.string().required("*Required"),
	audience: Yup.string().required("*Required"),
	camp_img: Yup.mixed().required("Image is Required"),
	camp_description: Yup.string().test("minWords","Must have at least 20 words", value => {
		value.split(" ") >= 5
	}).required("*Required"),
});
