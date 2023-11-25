import "./PageBanner.css";
import PropTypes from "prop-types";
const PageBanner = ({title,subTitle}) => {
    return (
        <div className="page-banner-section px-5">
            <div>
                <h2>{title}</h2>
                <div>
                    <p>home</p>
                    <p className="subTitle">{subTitle}</p>
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