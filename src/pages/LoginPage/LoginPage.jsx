import { NavLink } from "react-router-dom";
import "./LoginPage.css";
import { SignUpPage } from "../../components/SignUpPage/SignUpPage";
export const LoginPage = () => {
  const handleLoginForm = () => {};
  return (
    <>
      <div className="loginContainer">
        <SignUpPage></SignUpPage>
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
            <button type="submit">Log in</button>
          </form>
          <div className="toggleToCreateAccount">
            <NavLink>Forget password</NavLink>
            <button>
              <NavLink>Create account</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
