import useCamps from "../../../Hooks/useCamps";
import CampCard from "../../Shared/CampCard/CampCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Popular = () => {
    const [camps] = useCamps();
    return (
        <div>
            <div className="">
                <SectionTitle title="Popular Camps" subTitle="explore"></SectionTitle>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-12">
                {
                    camps?.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>
        </div>
    );
};

export default Popular;