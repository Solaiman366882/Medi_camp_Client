import SectionTitle from "../../../Component/Shared/SectionTitle/SectionTitle";

const AddCamp = () => {

	return (
		<div className="section-padding">
			<div className="max-w-screen-xl mx-auto px-5">
				<div>
					<SectionTitle
						title="New Camp"
						subTitle="Add a"
					></SectionTitle>
				</div>
				<div className="mt-8">
					<div className="form-area">
						<form action="" className="grid grid-cols-2 gap-5">
							<div className="single-input">
								<label htmlFor="camp_name">Camp Name</label>
								<input
									type="text"
									name="camp_name"
									id="camp_name"
									placeholder="add a camp name"
								/>
							</div>
							
							<div className="single-input">
								<label htmlFor="camp_fees">Camp Fees</label>
								<input
									type="text"
									name="camp_fees"
									id="camp_fees"
									placeholder="What Would Be the fees"
								/>
							</div>
							<div className="single-input">
								<label htmlFor="start_date_time">
									starting date
								</label>
								<input type="date" />
							</div>
							<div className="single-input">
								<label htmlFor="end_date_time">
									End date
								</label>
								<input type="date" />
							</div>
                            <div className="single-input">
                                <label htmlFor="camp_professionals">Health Care Professionals</label>
                                <input type="text" name="camp_professionals" id="camp_professionals" placeholder="Professionals" />
                            </div>
                            <div className="single-input">
                                <label htmlFor="venue">Venue</label>
                                <input type="text" placeholder="Venue" name="venue" id="venue" />
                            </div>
                            <div className="single-input col-span-2">
                                <label htmlFor="camp_services">Specialized Services Provided</label>
                                <input type="text" name="camp_services" id="camp_services" placeholder="Specialized Services Provided" />
                            </div>
                            
                            <div className="single-input">
                                <label htmlFor="audience">Target Audience</label>
                                <select name="audience" id="audience">
                                    <option value="Select Audience" disabled selected>Select Audience</option>
                                    <option value="Seniors aged 65 and above">Seniors aged 65 and above</option>
                                    <option value="mental health support and stress management">Mental health support, stress management</option>
                                    <option value="Individuals with diabetes">Individuals with diabetes</option>
                                    <option value="children up to 5 years old">children up to 5 years old</option>
                                    <option value="Women of all ages">Women of all ages</option>
                                    <option value=" Adults aged 40 and above"> Adults aged 40 and above</option>
                                </select>
                            </div>
                            <div className="single-input">
								<label htmlFor="camp_img">
									Upload an Image
								</label>
								<input
									type="file"
									name="camp_img"
									id="camp_img"
									placeholder="Upload an Image"
								/>
							</div>
                            <div className="single-input col-span-2">
                                <label htmlFor="camp_description">Description</label>
                                <textarea name="camp_description" id="camp_description" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <button className="btn" type="submit">Add Camp Now !</button>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddCamp;
