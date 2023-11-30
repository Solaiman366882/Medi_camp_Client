import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCamps = () => {

    const axiosPublic = useAxiosPublic();

    const {data:camps = [],isLoading,refetch} = useQuery({
        queryKey:['camps'],
        queryFn: async() => {
            const res = await axiosPublic.get('/camps');
            return res.data;
        }
    })

    return [camps,isLoading,refetch]
};

export default useCamps;