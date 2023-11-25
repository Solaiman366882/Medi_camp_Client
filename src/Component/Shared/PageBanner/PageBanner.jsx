import "./PageBanner.css";
import PropTypes from "prop-types";
import virusShape from "../../../assets/images/shape-virus.png";
const PageBanner = ({title,subTitle}) => {
    return (
        <div className="page-banner-section px-5">
            <div className="text-center">
                <h2 className="text-white text-5xl mb-5 font-bold capitalize">{title}</h2>
                <div className="flex gap-5 justify-center items-center">
                    <p className="text-white font-medium capitalize text-lg page-arrow">home</p>
                    <p className="subTitle font-medium capitalize text-secondary text-lg">{subTitle}</p>
                </div>
            </div>
            <div>
                <div className="shape-1">
                    <img src={virusShape} alt="" />
                </div>
                <div className="shape-2">
                    <img src={virusShape} alt="" />
                </div>
                <div className="shape-3">
                    <img src={virusShape} alt="" />
                </div>
                <div className="shape-4">
                    <img src={virusShape} alt="" />
                </div>
            </div>
        </div>
    );
};
PageBanner.propTypes = {
    title: PropTypes.string,
	subTitle: PropTypes.string,
}

export default PageBanner;