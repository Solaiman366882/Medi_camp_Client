import { Button, Table } from "flowbite-react";
import SectionTitle from "../../../Component/Shared/SectionTitle/SectionTitle";
import useCamps from "../../../Hooks/useCamps";
import { MdDeleteSweep } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const ManageCamps = () => {
    const [camps] = useCamps();
    return (
        <div>
            <div>
                <SectionTitle title="All camps" subTitle="here's your"></SectionTitle>
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
						<Table.HeadCell className="text-secondary bg-primary font-bold ">
							Action
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{camps.map((camp) => (
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
								<Table.Cell>
                                <Table.Cell className="flex gap-3">
									<Button color="red" size="sm"><MdDeleteSweep /></Button>
                                    <Button color="blue"><FiEdit /></Button>
								</Table.Cell>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
            </div>
        </div>
    );
};

export default ManageCamps;