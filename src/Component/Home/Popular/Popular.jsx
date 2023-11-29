import { useEffect, useState } from "react";
import useCamps from "../../../Hooks/useCamps";
import CampCard from "../../Shared/CampCard/CampCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Popular = () => {
    const [popularCamps,setPopularCamps] = useState([]);
    const [camps] = useCamps();
    useEffect(() => {
        const len = camps.length;
        for(let i=0; i < len-1; i++)
        {
            for(let j=0; j < len; j++)
            {
                const iPart= parseInt(camps[i].participants);
                const jPart= parseInt(camps[j].participants);
                if(iPart > jPart)
                {
                    const temp = camps[i];
                    camps[i] = camps[j];
                    camps[j] = temp;
                }
            }
        }
        setPopularCamps(camps.slice(0,6));
    },[camps])
    return (
        <div>
            <div className="">
                <SectionTitle title="Popular Camps" subTitle="explore"></SectionTitle>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-12">
                {
                    popularCamps?.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                }
            </div>
        </div>
    );
};

export default Popular;