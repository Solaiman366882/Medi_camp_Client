import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const{data:users = [],} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data
        } 
    })
    return (
        <div>
            this is all users{users.length}
        </div>
    );
};

export default AllUsers;