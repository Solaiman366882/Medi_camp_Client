import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://medical-camp-server-omega.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;