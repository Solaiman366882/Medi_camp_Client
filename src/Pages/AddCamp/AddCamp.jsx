import { useFormik } from "formik";
import SectionTitle from "../../Component/Shared/SectionTitle/SectionTitle";
import { CampSchema } from "../../Schemas";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddCamp = () => {
	const img_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
	const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_api_key}`;
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();

	const initialValues = {
		camp_name: "",
		camp_fees: "",
		start_date: "",
		end_date: "",
		camp_professionals: "",
		venue: "",
		camp_services: "",
		audience: "",
		camp_img: null,
		camp_description: "",
	};

	const {
		handleBlur,
		handleChange,
		handleSubmit,
		touched,
		values,
		errors,
		setFieldValue,
	} = useFormik({
		initialValues: initialValues,
		validationSchema: CampSchema,
		onSubmit: async (values) => {
			console.log(values);
			const imgFile = { image: values.camp_img };
			const res = await axiosPublic.post(img_hosting_api, imgFile, {
				headers: {
					"content-type": "multipart/form-data",
				},
			});
			//console.log("img posted successfully", res.data);
			const newCamp = {
				camp_name: values.camp_name,
				camp_fees: values.camp_fees,
				start_date: values.start_date,
				end_date: values.end_date,
				camp_professionals: values.camp_professionals,
				venue: values.venue,
				camp_services: values.camp_services,
				audience: values.audience,
				camp_img: res.data.data.display_url,
				camp_description: values.camp_description,
				participants: 0,
			};
			console.log(newCamp);
			axiosSecure.post("/camps", newCamp)
			.then((res) => {
				if (res.data.insertedId) {
					Swal.fire({
						title: "Good job!",
						text: "Successfully Added new Camp",
						icon: "success",
					});
				}
			})
			.catch(err => console.log(err))
		},
	});

	return (
		<div className="pt-8">
			<Helmet>
				<title>Atom | Add Camp</title>
			</Helmet>
			<div className="w-full mx-auto px-5">
				<div>
					<SectionTitle
						title="New Camp"
						subTitle="Add a"
					></SectionTitle>
				</div>
				<div className="mt-8">
					<div className="form-area mx-auto">
						<form
							onSubmit={handleSubmit}
							className="grid grid-cols-2 gap-5"
						>
							<div className="single-input">
								<label htmlFor="camp_name">Camp Name</label>
								<input
									type="text"
									name="camp_name"
									id="camp_name"
									placeholder="add a camp name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.camp_name}
								/>
								{errors.camp_name && touched.camp_name ? (
									<p className="mt-3 text-red-700">
										{errors.camp_name}
									</p>
								) : null}
							</div>

							<div className="single-input">
								<label htmlFor="camp_fees">Camp Fees</label>
								<input
									type="text"
									name="camp_fees"
									id="camp_fees"
									placeholder="What Would Be the fees"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.camp_fees}
								/>
								{errors.camp_fees && touched.camp_fees ? (
									<p className="mt-3 text-red-700">
										{errors.camp_fees}
									</p>
								) : null}
							</div>
							<div className="single-input">
								<label htmlFor="start_date_time">
									starting date
								</label>
								<input
									type="date"
									name="start_date"
									id="start_date_time"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.start_date}
								/>
								{errors.start_date && touched.start_date ? (
									<p className="text-red-700 mt-3">
										{errors.start_date}
									</p>
								) : null}
							</div>
							<div className="single-input">
								<label htmlFor="end_date_time">End date</label>
								<input
									type="date"
									name="end_date"
									id="end_date_time"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.end_date}
								/>
								{errors.end_date && touched.end_date ? (
									<p className="mt-3 text-red-700">
										{errors.end_date}
									</p>
								) : null}
							</div>
							<div className="single-input">
								<label htmlFor="camp_professionals">
									Health Care Professionals
								</label>
								<input
									type="text"
									name="camp_professionals"
									id="camp_professionals"
									placeholder="Professionals"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.camp_professionals}
								/>
								{errors.camp_professionals &&
								touched.camp_professionals ? (
									<p className="mt-3 text-red-700">
										{errors.camp_professionals}
									</p>
								) : null}
							</div>
							<div className="single-input">
								<label htmlFor="venue">Venue</label>
								<input
									type="text"
									placeholder="Venue"
									name="venue"
									id="venue"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.venue}
								/>
								{errors.venue && touched.venue ? (
									<p className="mt-3 text-red-700">
										{errors.venue}
									</p>
								) : null}
							</div>
							<div className="single-input col-span-2">
								<label htmlFor="camp_services">
									Specialized Services Provided
								</label>
								<input
									type="text"
									name="camp_services"
									id="camp_services"
									placeholder="Specialized Services Provided"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.camp_services}
								/>
								{errors.camp_services &&
								touched.camp_services ? (
									<p className="mt-3 text-red-700">
										{errors.camp_services}
									</p>
								) : null}
							</div>

							<div className="single-input">
								<label htmlFor="audience">
									Target Audience
								</label>
								<select
									name="audience"
									id="audience"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.audience}
								>
									<option value="Select Audience" disabled>
										Select Audience
									</option>
									<option value="Adults aged 25 and above">
										Adults aged 25 and above
									</option>
									<option value="Seniors aged 65 and above">
										Seniors aged 65 and above
									</option>
									<option value="children up to 12 years old">
										children up to 12 years old
									</option>
									<option value="mental health support and stress management">
										Mental health support, stress management
									</option>
									<option value="Individuals with diabetes">
										Individuals with diabetes
									</option>
									<option value="children up to 5 years old">
										children up to 5 years old
									</option>
									<option value="Women of all ages">
										Women of all ages
									</option>
									<option value=" Adults aged 40 and above">
										Adults aged 40 and above
									</option>
								</select>
								{errors.audience && touched.audience ? (
									<p className="mt-3 text-red-700">
										{errors.audience}
									</p>
								) : null}
							</div>
							<div className="single-input">
								<label htmlFor="camp_img">
									Upload an Image
								</label>
								<input
									type="file"
									name="camp_img"
									id="camp_img"
									accept="image/*"
									placeholder="Upload an Image"
									onChange={(e) => {
										setFieldValue(
											"camp_img",
											e.currentTarget.files[0]
										);
									}}
									onBlur={handleBlur}
								/>
								{errors.camp_img && touched.camp_img ? (
									<p className="mt-3 text-red-700">
										{errors.camp_img}
									</p>
								) : null}
							</div>
							<div className="single-input col-span-2">
								<label htmlFor="camp_description">
									Description
								</label>
								<textarea
									name="camp_description"
									id="camp_description"
									cols="30"
									rows="10"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.camp_description}
								></textarea>
								{errors.camp_description &&
								touched.camp_description ? (
									<p>{errors.camp_description}</p>
								) : null}
							</div>
							<div>
								<input
									className="btn"
									type="submit"
									value="Add Camp Now !"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddCamp;
