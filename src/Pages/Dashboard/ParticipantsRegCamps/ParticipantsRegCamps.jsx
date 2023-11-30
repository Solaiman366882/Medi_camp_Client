import { Table } from "flowbite-react";
import SectionTitle from "../../../Component/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { ImCancelCircle } from "react-icons/im";
import Swal from "sweetalert2";


const ParticipantsRegCamps = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data:registeredCamps = [],refetch} = useQuery({
        queryKey:['registered camps'],
        queryFn:async() => {
            const res = await axiosSecure.get(`/register?email=${user.email}`);
            console.log(res.data);
            return res.data;
        }
    });
    const handleCancel = id => {
        Swal.fire({
            title: "Do you want to cancel",
            showDenyButton: true,
            confirmButtonText: "Cancel",
            denyButtonText: `Don't Cancel`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.delete(`/register/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0)
                    {
                        refetch();
                        Swal.fire("Saved!", "", "success");
                    }
                })
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
    return (
        <div>
            <div>
                <SectionTitle title="registered camps" subTitle="here's your"></SectionTitle>
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
									<button className="btn" onClick={() => handleCancel(camp._id)}><ImCancelCircle /></button>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
            </div>
        </div>
    );
};

export default ParticipantsRegCamps;