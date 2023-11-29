import { useParams } from "react-router-dom";
import PageBanner from "../../Component/Shared/PageBanner/PageBanner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "./CampDetails.css";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const CampDetails = () => {
	const [openModal, setOpenModal] = useState(false);
	const { user } = useAuth();
	const { campId } = useParams();
	const axiosSecure = useAxiosSecure();
	const { data: campInfo, refetch } = useQuery({
		queryKey: ["camp"],
		queryFn: async () => {
			const res = await axiosSecure.get(`/camps/${campId}`);
			return res.data;
		},
	});

	const {
		camp_name,
		camp_fees,
		start_date,
		end_date,
		camp_professionals,
		venue,
		camp_services,
		audience,
		camp_img,
		camp_description,
		participants,
	} = campInfo || {};

	const onCloseModal = () => {
		setOpenModal(false);
	};
	const handleRegistration = (e) => {
		e.preventDefault();
		const form = e.target;
		const pName = form.pname.value;
		const age = form.age.value;
		const phone = form.phone.value;
		const gender = form.gender.value;
		const address = form.address.value;
		console.log(pName);

		const registrationInfo = {
			patient_name: pName,
			patient_age: age,
			phone,
			gender,
			address,
			fees: camp_fees,
			email: user?.email,
			camp_name,
			camp_id: campId,
		};
		const participantCount = parseInt(participants) + 1;
		const updated = { participants: participantCount };
		console.log("Registration handled", registrationInfo, updated);
		axiosSecure.patch(`/participant/${campId}`, updated).then((res) => {
			console.log(res);
			if (res.data.modifiedCount > 0) {
				axiosSecure
					.post("/register", registrationInfo)
					.then((result) => {
						if (result.data.insertedId) {
							setOpenModal(false);
							Swal.fire({
								title: "Good job!",
								text: "Successfully Registered",
								icon: "success",
							});
						}
					});
			}
			refetch();
		});
	};

	return (
		<div>
			<Helmet>
				<title>Atom | Camp Details</title>
			</Helmet>
			<div>
				<PageBanner
					subTitle="camp-details"
					title={camp_name}
				></PageBanner>
			</div>
			<div className="mt-8 max-w-screen-xl mx-auto px-5">
				<div className="camp-details">
					<div className="camp-img">
						<img src={camp_img} alt="" />
					</div>
					<div className="camp-details-body">
						<div className="camp-date flex justify-between items-center">
							<div>
								<p className="text-primary text-lg font-semibold">
									<span className="text-secondary text-base">
										going start on :
									</span>
									{start_date}
								</p>
								<p className="text-primary text-lg font-semibold">
									<span className="text-secondary text-base">
										end will :
									</span>
									{end_date}
								</p>
							</div>
							<div>
								<button
									className="btn"
									onClick={() => setOpenModal(true)}
								>
									Join Now
								</button>
							</div>
						</div>
						<div>
							<h2 className="text-center mb-3 mt-5 text-primary font-bold text-3xl">
								{camp_name}
							</h2>
						</div>
						<div className="grid grid-cols-3 gap-5 py-5 ">
							<h3 className="text-primary text-lg font-semibold capitalize col-span-2">
								<span className="text-secondary text-base">
									Available Professionals :{" "}
								</span>
								{camp_professionals}
							</h3>
							<p className="text-primary text-lg font-semibold capitalize">
								<span className="text-secondary text-base">
									location :
								</span>{" "}
								{venue}
							</p>
							<h4 className="text-primary text-lg font-semibold capitalize col-span-2">
								<span className="text-secondary text-base">
									Camp for :
								</span>
								{audience}
							</h4>
							<p className="text-primary text-lg font-semibold capitalize">
								<span className="text-secondary text-base">
									fees :
								</span>
								${camp_fees} only
							</p>
							<h5 className="text-primary text-lg font-semibold capitalize col-span-2">
								<span className="text-secondary text-base">
									Camp Services:
								</span>
								{camp_services}
							</h5>
							<p className="text-primary text-lg font-semibold capitalize">
								<span className="text-secondary text-base">
									Participants :
								</span>
								{parseInt(participants)}
							</p>
						</div>
						<div className="my-4 flex justify-between items-center"></div>
						<div>
							<p className="text-primary text-base font-medium">
								{" "}
								<span className="text-secondary font-semibold">
									Camp Details :{" "}
								</span>{" "}
								{camp_description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Modal show={openModal} size="md" onClose={onCloseModal} popup>
					<Modal.Header>Registration</Modal.Header>
					<Modal.Body>
						<form onSubmit={handleRegistration}>
							<div className="space-y-6">
								<div className="form-area grid grid-cols-1 gap-5">
									<div className="single-input">
										<label htmlFor="name">name</label>
										<input
											type="text"
											name="pname"
											id="name"
											placeholder="patient name"
										/>
									</div>
									<div className="single-input">
										<label htmlFor="age">age</label>
										<input
											type="number"
											name="age"
											id="age"
											placeholder="patient age"
										/>
									</div>
									<div className="single-input">
										<label htmlFor="phone">Phone</label>
										<input
											type="tel"
											name="phone"
											id="name"
											placeholder="phone"
										/>
									</div>
									<div className="flex justify-between capitalize items-center">
										<div className="flex gap-3 items-center">
											<label htmlFor="male">male</label>
											<input
												type="radio"
												name="gender"
												id="male"
												value="male"
												defaultChecked
											/>
										</div>
										<div className="flex gap-3 items-center">
											<label htmlFor="female">
												female
											</label>
											<input
												type="radio"
												name="gender"
												id="female"
												value="female"
											/>
										</div>
										<div className="flex gap-3 items-center">
											<label htmlFor="other">other</label>
											<input
												type="radio"
												name="gender"
												id="other"
												value="other"
											/>
										</div>
									</div>
									<div className="single-input">
										<label htmlFor="fees">fees</label>
										<input
											type="text"
											defaultValue={camp_fees}
											readOnly
										/>
									</div>
									<div className="single-input">
										<label htmlFor="address">address</label>
										<input
											type="text"
											name="address"
											id="address"
											placeholder="Your address"
										/>
									</div>
									<div>
										<button className="btn" type="submit">
											Submit
										</button>
									</div>
								</div>
							</div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button
							color="gray"
							type="button"
							onClick={() => setOpenModal(false)}
						>
							Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};

export default CampDetails;

{
	/* <div className="camp-details-body">
<div className="camp-date flex justify-between items-center">
	<div>
		<p className="text-primary text-lg font-semibold">
			<span className="text-secondary text-base">
				going start on :
			</span>
			{start_date}
		</p>
		<p className="text-primary text-lg font-semibold">
			<span className="text-secondary text-base">
				end will :
			</span>
			{end_date}
		</p>
	</div>
	<div>
		<button
			className="btn"
			onClick={() => setOpenModal(true)}
		>
			Join Now
		</button>
	</div>
</div>
<div>
	<h2 className="text-center mb-3 mt-5 text-primary font-bold text-3xl">
		{camp_name}
	</h2>
</div>
<div className="grid grid-cols-2 gap-5 py-5  justify-items-center">
	<h3 className="text-primary text-lg font-semibold capitalize">
		<span className="text-secondary text-base">
			Available Professionals :{" "}
		</span>
		{camp_professionals}
	</h3>
	<p className="text-primary text-lg font-semibold capitalize">
		<span className="text-secondary text-base">
			location :
		</span>{" "}
		{venue}
	</p>
	<h4 className="text-primary text-lg font-semibold capitalize">
		<span className="text-secondary text-base">
			Camp for :
		</span>
		{audience}
	</h4>
	<p className="text-primary text-lg font-semibold capitalize">
		<span className="text-secondary text-base">
			fees :
		</span>
		${camp_fees} only
	</p>
</div>
<div className="my-4 flex justify-between items-center">
	<h5 className="text-primary text-lg font-semibold capitalize">
		<span className="text-secondary text-base">
			Camp Services:
		</span>
		{camp_services}
	</h5>
	<p className="text-primary text-lg font-semibold capitalize">
		<span className="text-secondary text-base">
			Participants :
		</span>
		{parseInt(participants)}
	</p>
</div>
<div>
	<p className="text-primary text-base font-medium">
		{" "}
		<span className="text-secondary font-semibold">
			Camp Details :{" "}
		</span>{" "}
		{camp_description}
	</p>
</div>
</div> */
}
