
import { FacebookAuthProvider } from "firebase/auth";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleLogin,facebookLogin,githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            console.log(res);
            Swal.fire({
                title: "Logged In",
                text: `Welcome ${res?.user?.displayName}`,
                icon: "success"
              });
              navigate(location?.state ? location.state : "/");
        })
        .catch(err => console.log(err))
    }
    const handleFacebookLogin = () => {
        facebookLogin()
        .then(res => {
            // TODO : it has to fixed
            const credential = FacebookAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            const user = res.user;
            console.log('facebook login',user,token)})
        .catch(err => console.log(err))
    }
    const handleGithubLogin = () => {
        githubLogin()
        .then(res => {
            Swal.fire({
                title: "Logged In",
                text: `Welcome ${res?.user?.displayName}`,
                icon: "success"
              });
              navigate(location?.state ? location.state : "/");
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="w-full flex justify-between items-center py-6">
            <button className="btn" onClick={handleGoogleLogin}>Google</button>
            <button className="btn" onClick={handleFacebookLogin}>Facebook</button>
            <button className="btn" onClick={handleGithubLogin}>Github</button>
        </div>
    );
};

export default SocialLogin;