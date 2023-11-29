import { Helmet } from "react-helmet";
import CampCard from "../../Component/Shared/CampCard/CampCard";
import PageBanner from "../../Component/Shared/PageBanner/PageBanner";
import useCamps from "../../Hooks/useCamps";

const AvailableCamp = () => {

    const [camps] = useCamps()

    return (
        <div>
            <Helmet>
                <title>Atom | Available Camps</title>
            </Helmet>
            <div>
                <PageBanner title="Explore All Camps" subTitle="available camps"></PageBanner>
            </div>
            <div className="max-w-screen-xl mx-auto px-5 section-padding">
                <div className="grid grid-cols-3 gap-5">
                {
                    camps?.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default AvailableCamp;