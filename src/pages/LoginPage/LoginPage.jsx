import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { SignUpPage } from "../../components/SignUpPage/SignUpPage";
import { useEffect, useState } from "react";
import {
  useIdToken,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.init";
export const LoginPage = () => {
  const [userInputInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  console.log(userInputInfo);
  const [getSignUPPopUp, setSignUpPopUp] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleLoginForm = () => {
    signInWithEmailAndPassword(userInputInfo.email, userInputInfo.password);
    if (userAccess) navigate("/");
  };
  const [userAccess] = useIdToken(auth);
  useEffect(() => {
    if (userAccess) {
      // navigate("/");
    }
  }, [userAccess]);

  return (
    <>
      <div className={`loginContainer  ${getSignUPPopUp && "onBlur"}`}>
        {getSignUPPopUp ? (
          <div className="">
            <SignUpPage setSignUpPopUp={setSignUpPopUp}></SignUpPage>
          </div>
        ) : (
          ""
        )}
        <div className="loginMessage">
          <h1>facebook</h1>
          <h2>
            Facebook helps you connect and share <br /> with the people in your
            life.
          </h2>
        </div>

        <div className="loginForm">
          <form onSubmit={handleLoginForm}>
            <div>
              <input
                type="text"
                name="email"
                onChange={(e) =>
                  setUserInfo({
                    ...userInputInfo,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Email address or phone number"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setUserInfo({
                    ...userInputInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <button disabled={getSignUPPopUp ? true : false} type="submit">
              Log in
            </button>
          </form>
          <div className="toggleToCreateAccount">
            <NavLink disabled={getSignUPPopUp ? true : false}>
              Forget password
            </NavLink>
            <button
              disabled={getSignUPPopUp ? true : false}
              onClick={() => setSignUpPopUp(true)}
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
