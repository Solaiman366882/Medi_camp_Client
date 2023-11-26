
import { FacebookAuthProvider } from "firebase/auth";
import useAuth from "../../../Hooks/useAuth";

const SocialLogin = () => {

    const {googleLogin,facebookLogin,githubLogin} = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    const handleFacebookLogin = () => {
        facebookLogin()
        .then(res => {
            const credential = FacebookAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            const user = res.user;
            console.log('facebook login',user,token)})
        .catch(err => console.log(err))
    }
    const handleGithubLogin = () => {
        githubLogin()
        .then(res => console.log('github login',res))
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