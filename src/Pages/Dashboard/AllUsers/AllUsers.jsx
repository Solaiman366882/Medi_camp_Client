import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Dropdown, Table } from "flowbite-react";
import SectionTitle from "../../../Component/Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});

	// make user admin
	const handleMakeAdmin = (user) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger",
			},
			buttonsStyling: false,
		});
		swalWithBootstrapButtons
			.fire({
				title: "Are you sure?",
				text: `Give ${user.name} admin role`,
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Make Admin",
				cancelButtonText: "No, cancel!",
				reverseButtons: true,
			})
			.then((result) => {
				if (result.isConfirmed) {
					axiosSecure
						.patch(`/users/admin/${user._id}`)
						.then((res) => {
							if (res.data.modifiedCount > 0) {
								refetch();
								swalWithBootstrapButtons.fire({
									title: "Role Updated!",
									text: `${user.name} is an admin now`,
									icon: "success",
								});
							}
						});
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					swalWithBootstrapButtons.fire({
						title: "Cancelled",
						text: "Your user is Participants now",
						icon: "error",
					});
				}
			});
	};

	//make specific user as a organizer
	const handleMakeOrganizer = (user) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger",
			},
			buttonsStyling: false,
		});
		swalWithBootstrapButtons
			.fire({
				title: "Are you sure?",
				text: `Give ${user.name} Organizer role`,
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Make Organizer",
				cancelButtonText: "No, cancel!",
				reverseButtons: true,
			})
			.then((result) => {
				if (result.isConfirmed) {
					axiosSecure
						.patch(`/users/organizer/${user._id}`)
						.then((res) => {
							if (res.data.modifiedCount > 0) {
								refetch();
								swalWithBootstrapButtons.fire({
									title: "Role Updated!",
									text: `${user.name} is Organizer Now`,
									icon: "success",
								});
							}
						});
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					swalWithBootstrapButtons.fire({
						title: "Cancelled",
						text: "Your user is Participants now",
						icon: "error",
					});
				}
			});
	};

	//handle delete user from database
	const handleDelete = (user) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger",
			},
			buttonsStyling: false,
		});
		swalWithBootstrapButtons
			.fire({
				title: "Are you sure?",
				text: `Want to delete ${user.name}`,
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Remove User",
				cancelButtonText: "No, cancel!",
				reverseButtons: true,
			})
			.then((result) => {
				if (result.isConfirmed) {
					axiosSecure.delete(`/users/${user._id}`).then((res) => {
						if (res.data.deletedCount > 0) {
							refetch();
							swalWithBootstrapButtons.fire({
								title: "Deleted!",
								text: `${user.name} is Removed`,
								icon: "success",
							});
						}
					});
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					swalWithBootstrapButtons.fire({
						title: "Cancelled",
						text: "Your Participants is safe :)",
						icon: "error",
					});
				}
			});
	};

	return (
		<div>
			<div className="mb-8">
				<SectionTitle
					title={`Total User : ${users.length}`}
					subTitle="All Users"
				></SectionTitle>
			</div>
			<div>
				<Table>
					<Table.Head className="bg-primary">
						<Table.HeadCell className="text-secondary bg-primary"></Table.HeadCell>
						<Table.HeadCell className="text-secondary bg-primary font-bold text-base">
							Name
						</Table.HeadCell>
						<Table.HeadCell className="text-secondary bg-primary font-bold text-base">
							Email
						</Table.HeadCell>
						<Table.HeadCell className="text-secondary bg-primary font-bold text-base">
							role
						</Table.HeadCell>
						<Table.HeadCell className="text-secondary bg-primary font-bold text-base">
							Action
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{users.map((user, idx) => (
							<Table.Row
								key={user._id}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{idx + 1}
								</Table.Cell>
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white capitalize">
									{user.name}
								</Table.Cell>
								<Table.Cell>{user.email}</Table.Cell>
								<Table.Cell>{user.role}</Table.Cell>
								<Table.Cell>
									<div>
										{user.role === "admin" ? (
											"Admin"
										) : (
											<Dropdown
												className="btn"
												label="Edit"
												inline
											>
												<Dropdown.Item
													onClick={() =>
														handleMakeAdmin(user)
													}
												>
													Make Admin
												</Dropdown.Item>
												<Dropdown.Item
													onClick={() =>
														handleMakeOrganizer(
															user
														)
													}
												>
													Make Organizer
												</Dropdown.Item>
												<Dropdown.Item
													onClick={() =>
														handleDelete(user)
													}
												>
													Remove User
												</Dropdown.Item>
											</Dropdown>
										)}
									</div>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
};

export default AllUsers;
