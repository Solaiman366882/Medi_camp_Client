import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SliderComponent from "./SliderComponent";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import "./Slider.css";

const Testimonial = () => {
	const axiosPublic = useAxiosPublic();
	const { data = [] } = useQuery({
		queryKey: ["feedbacks"],
		queryFn: async () => {
			const res = await axiosPublic.get("/feedback");
			console.log(res.data);
			return res.data;
		},
	});
	return (
		<div className="testimonial-section">
			<div className="section-padding max-w-screen-xl mx-auto">
				<div>
					<SectionTitle
						subTitle="Testimonials"
						title="What Our Clients Say"
					></SectionTitle>
				</div>
				<div className="mt-8">
					<SliderComponent feedback={data}></SliderComponent>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
