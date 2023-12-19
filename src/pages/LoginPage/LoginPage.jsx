import { NavLink } from "react-router-dom";
import "./LoginPage.css";
import { SignUpPage } from "../../components/SignUpPage/SignUpPage";
import { useState } from "react";
export const LoginPage = () => {
  const [getSignUPPopUp, setSignUpPopUp] = useState(false);

  const handleLoginForm = () => {};
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
              <input type="text" placeholder="Email address or phone number" />
            </div>
            <div>
              <input type="text" placeholder="Password" />
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
