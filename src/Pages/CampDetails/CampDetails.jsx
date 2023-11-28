import { useParams } from "react-router-dom";
import PageBanner from "../../Component/Shared/PageBanner/PageBanner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "./CampDetails.css";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const CampDetails = () => {
	const [openModal, setOpenModal] = useState(false);
	const { campId } = useParams();
	const axiosSecure = useAxiosSecure();
	console.log(campId);
	const { data: campInfo } = useQuery({
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
	} = campInfo || {};

	const onCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div>
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
										going start on :{" "}
									</span>{" "}
									{start_date}
								</p>
								<p className="text-primary text-lg font-semibold">
									<span className="text-secondary text-base">
										end will :{" "}
									</span>{" "}
									{end_date}{" "}
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
									Camp for :{" "}
								</span>{" "}
								{audience}
							</h4>
							<p className="text-primary text-lg font-semibold capitalize">
								<span className="text-secondary text-base">
									fees :
								</span>{" "}
								${camp_fees} only
							</p>
						</div>
						<div className="my-4">
							<h5 className="text-primary text-lg font-semibold capitalize">
								<span className="text-secondary text-base">
									Camp Services:
								</span>{" "}
								{camp_services}
							</h5>
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
					</div>
				</div>
			</div>
			<Modal show={openModal} size="md" onClose={onCloseModal} popup>
				<Modal.Header>Registration</Modal.Header>
				<Modal.Body>
					<div className="space-y-6"> this is modal</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setOpenModal(false)}>
						I accept
					</Button>
					<Button color="gray" onClick={() => setOpenModal(false)}>
						Decline
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default CampDetails;
