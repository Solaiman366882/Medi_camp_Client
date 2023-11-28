import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCamps = () => {

    const axiosPublic = useAxiosPublic();

    const {data:camps,isLoading} = useQuery({
        queryKey:['camps'],
        queryFn:() => {
            const res =  axiosPublic.get('/camps');
            return res.data;
        }
    })

    return [camps,isLoading]
};

export default useCamps;