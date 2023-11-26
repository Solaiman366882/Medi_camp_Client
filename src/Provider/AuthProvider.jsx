import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import {
	FacebookAuthProvider,
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { app } from "../config/firebaseConfig";

// Auth created for all authentication function
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();
	const githubProvider = new GithubAuthProvider();

	//create user with email password
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//user login with email and password
	const userLogin = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// handle google login

	const googleLogin = () => {
		return signInWithPopup(auth, googleProvider);
	};

	//handle facebook login
	const facebookLogin = () => {
		return signInWithPopup(auth, facebookProvider);
	};

	//handle Github Login
	const githubLogin = () => {
		return signInWithPopup(auth, githubProvider);
	};

	// user Log out
	const logOut = () => {
		return signOut(auth);
	};

	//updateProfile
	// const setProfile = () =>{
	//     return updateProfile(auth.currentUser)
	// }

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unSubscribe();
		};
	}, []);

	const authentications = {
		user,
		createUser,
		userLogin,
		logOut,
		loading,
		googleLogin,
		facebookLogin,
		githubLogin,
	};
	return (
		<AuthContext.Provider value={authentications}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
