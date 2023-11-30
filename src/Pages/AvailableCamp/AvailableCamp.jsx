import { Helmet } from "react-helmet";
import PageBanner from "../../Component/Shared/PageBanner/PageBanner";
import useCamps from "../../Hooks/useCamps";
import CardCollection from "../../Component/Shared/CardCollection";
import { Tabs } from "flowbite-react";
import { FaSearchengin } from "react-icons/fa6";
import { useState } from "react";

const AvailableCamp = () => {
	const [camps] = useCamps();
	const [isSearch, setIsSearch] = useState(false);
	const [searchedCamps, setSearchedCamps] = useState([]);

	//Most Registered camp based on participants
	const mostRegistered = camps.filter(
		(camp) => parseInt(camp.participants) > 0
	);

	//Adults Camps based on target audience
	const adultsCamps = camps.filter((camp) =>
		camp.audience.toLowerCase().includes("adults")
	);

	//Children Camps based on target audience
	const childrenCamps = camps.filter((camp) =>
		camp.audience.toLowerCase().includes("children")
	);

	//Women Camps based on target audience
	const womenCamps = camps.filter((camp) =>
		camp.audience.toLowerCase().includes("women")
	);

	const handleSearch = (e) => {
		e.preventDefault();
		const searchValue = e.target.search.value;
		const filterCamps = camps.filter((camp) =>
			camp.camp_name.toLowerCase().includes(searchValue.toLowerCase())
		);
		setSearchedCamps(filterCamps);
		setIsSearch(true);
	};

	return (
		<div>
			<Helmet>
				<title>Atom | Available Camps</title>
			</Helmet>
			<div>
				<PageBanner
					title="Explore All Camps"
					subTitle="available camps"
				></PageBanner>
			</div>
			<div>
				<div className="form-area">
					<form action="" onSubmit={handleSearch}>
						<div className="single-input relative overflow-hidden">
							<input
								type="text"
								name="search"
								placeholder="Search Camps by name ..."
							/>
							<button
								className="search-btn bg-primary text-secondary absolute right-0 top-0  h-full w-16 flex justify-center items-center"
								type="submit"
							>
								<FaSearchengin className="w-8 h-8"></FaSearchengin>
							</button>
						</div>
					</form>
				</div>
			</div>
			<div>
				{isSearch ? (
					searchedCamps.length > 0 ? (
						<div className="py-12">
							<CardCollection
								camps={searchedCamps}
							></CardCollection>
						</div>
					) : (
						<div className="w-full h-[50vh] flex flex-col gap-7 justify-center items-center">
							<h3 className="text-gray-500 text-4xl text-center font-bold">
								No Match Found
							</h3>
							<button
								className="btn"
								onClick={() => setIsSearch(false)}
							>
								Show All Cards
							</button>
						</div>
					)
				) : (
					<div className="mx-auto py-12">
						<Tabs
							aria-label="Tabs with icons"
							style="underline"
							className="mx-auto"
						>
							<Tabs.Item active title="All Camps">
								<CardCollection camps={camps}></CardCollection>
							</Tabs.Item>
							<Tabs.Item active title="Most Registered">
								<CardCollection
									camps={mostRegistered}
								></CardCollection>
							</Tabs.Item>
							<Tabs.Item title="Adults Camps">
								<CardCollection
									camps={adultsCamps}
								></CardCollection>
							</Tabs.Item>
							<Tabs.Item title="Women's Camps">
								<CardCollection
									camps={womenCamps}
								></CardCollection>
							</Tabs.Item>
							<Tabs.Item title="Children Camps">
								<CardCollection
									camps={childrenCamps}
								></CardCollection>
							</Tabs.Item>
							<Tabs.Item disabled title="Upcoming Camps">
								Disabled content
							</Tabs.Item>
						</Tabs>
					</div>
				)}
			</div>
		</div>
	);
};

export default AvailableCamp;
