import PageBanner from "../../Component/Shared/PageBanner/PageBanner";
import useCamps from "../../Hooks/useCamps";

const AvailableCamp = () => {

    const [camps] = useCamps()

    return (
        <div>
            <div>
                <PageBanner title="Explore All Camps" subTitle="available camps"></PageBanner>
            </div>
        </div>
    );
};

export default AvailableCamp;