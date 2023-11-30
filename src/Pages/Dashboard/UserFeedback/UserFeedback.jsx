import { Button, Modal, Table } from "flowbite-react";
import SectionTitle from "../../../Component/Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { MdRateReview } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
const UserFeedback = () => {
	const [openModal, setOpenModal] = useState(false);
	const [feedback, setFeedback] = useState("");
    const [ratings,setRatings] = useState("");
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();
	const { data: registeredCamps = [] } = useQuery({
		queryKey: ["registered camps"],
		queryFn: async () => {
			const res = await axiosSecure.get(`/register?email=${user.email}`);
			return res.data;
		},
	});

	const onCloseModal = (camp) => {
		setOpenModal(false);
        console.log(camp);
	};
	const closeModal = (camp) => {
        
        const feedbackInfo = {
            camp_name:camp.camp_name,
            user:user?.displayName,
            photo:user?.photoURL,
            email:user?.email,
            camp_id:camp.camp_id,
            feedback,
            ratings

        }
       
        axiosSecure.post('/feedback',feedbackInfo)
        .then(res => {
            if(res.data.insertedId)
            {
                Swal.fire({
                    title: "Good job!",
                    text: "We are thankful to get  your feedback",
                    icon: "success"
                  });
                  setOpenModal(false);
            }
        })
        
	};
	const openModaaal = () => {
		setOpenModal(true);
	};

	return (
		<div>
			<div>
				<div>
					<SectionTitle
						title="Your Attended Camps"
						subTitle="You can give feedback"
					></SectionTitle>
				</div>
				<div className="mt-8">
					<Table>
						<Table.Head className="bg-primary">
							{/* <Table.HeadCell className="text-secondary bg-primary"></Table.HeadCell> */}
							<Table.HeadCell className="text-secondary bg-primary ">
								Name
							</Table.HeadCell>
							<Table.HeadCell className="text-secondary bg-primary">
								Venue
							</Table.HeadCell>
							<Table.HeadCell className="text-secondary bg-primary ">
								Start Date
							</Table.HeadCell>
							<Table.HeadCell className="text-secondary bg-primary ">
								End Date
							</Table.HeadCell>
							<Table.HeadCell className="text-secondary bg-primary ">
								Fees
							</Table.HeadCell>
							<Table.HeadCell className="text-secondary bg-primary">
								Payment
							</Table.HeadCell>
							<Table.HeadCell className="text-secondary bg-primary ">
								Status
							</Table.HeadCell>
							<Table.HeadCell className="text-secondary bg-primary font-bold ">
								Action
							</Table.HeadCell>
						</Table.Head>
						<Table.Body className="divide-y">
							{registeredCamps.map((camp) => (
								<Table.Row
									key={camp._id}
									className="bg-white dark:border-gray-700 dark:bg-gray-800"
								>
									{/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{idx + 1}
								</Table.Cell> */}
									<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white capitalize">
										{camp.camp_name}
									</Table.Cell>
									<Table.Cell>{camp?.venue}</Table.Cell>
									<Table.Cell>{camp?.start_date}</Table.Cell>
									<Table.Cell>{camp?.end_date}</Table.Cell>
									<Table.Cell>${camp?.fees}</Table.Cell>
									<Table.Cell>{camp?.pay_status}</Table.Cell>
									<Table.Cell>{camp?.status}</Table.Cell>
									<Table.Cell>
										<button
											className="btn"
											onClick={() => openModaaal(camp)}
										>
											<MdRateReview />
										</button>
									</Table.Cell>
									<Modal
										show={openModal}
										size="md"
										onClose={onCloseModal}
										popup
									>
										<Modal.Header>
											Give Feedback
										</Modal.Header>
										<Modal.Body>
											<div className="space-y-6">
												<div className="form-area grid grid-cols-1 gap-5">
													<div className="single-input">
														<label htmlFor="rating">
															Ratings
														</label>
														<input
															type="number"
															name="rating"
															id="rating"
															placeholder="rate our service out of 5"
															min="1"
															max="5"
                                                            required
                                                            onChange={(e) => setRatings(e.target.value)}
														/>
													</div>
													<div className="single-input">
														<label htmlFor="feedback">
															Feedback
														</label>
														<textarea
															name="feedback"
															id="feedback"
															cols="30"
															rows="10"
                                                            required
															onChange={(e) =>
																setFeedback(
																	e.target
																		.value
																)
															}
														></textarea>
													</div>
													<div>
														<button
															className="btn"
															type="submit"
                                                            onClick={()=> closeModal(camp)}
														>
															Submit
														</button>
													</div>
												</div>
											</div>
										</Modal.Body>
										<Modal.Footer>
											<Button
												color="gray"
												type="button"
												onClick={() =>
													setOpenModal(false)
												}
											>
												Cancel
											</Button>
										</Modal.Footer>
									</Modal>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default UserFeedback;
