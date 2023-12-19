import "./SignupPage.css";
export const SignUpPage = () => {
  const handSignUpForm = () => {};
  return (
    <>
      <div className="signupContainer">
        <div className="signUpForm">
          <form onSubmit={handSignUpForm}>
            <div className="creatorName">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Sure Name" />
            </div>
            <div className="otherInfo">
              <div>
                <input
                  type="text"
                  placeholder="Mobile number or email address"
                />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <input type="date" />
              </div>
            </div>
            <span>Gender</span>
            <div className="genderInfo">
              <span className="genderBorder">
                <span>Female</span>
                <input type="radio" name="gender" value="female" />
              </span>
              <span className="genderBorder">
                <span>Male</span>
                <input type="radio" name="gender" value="male" />
              </span>
              <span className="genderBorder">
                <span>Custom</span>
                <input type="radio" name="gender" value="custom" />
              </span>
            </div>
            <button type="submit">Signup</button>
          </form>
          <div className="toggleToCreateAccount">
            {/* <button>
              <NavLink>Create account</NavLink>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
