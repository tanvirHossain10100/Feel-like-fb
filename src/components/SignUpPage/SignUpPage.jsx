import { FaCircleQuestion } from "react-icons/fa6";
import { GiExitDoor } from "react-icons/gi";
import {
  useCreateUserWithEmailAndPassword,
  useIdToken,
} from "react-firebase-hooks/auth";

import "./SignupPage.css";
import { auth } from "../../firebase/firebase.init";
import { useEffect, useState } from "react";
import { Loading } from "../../Loading/Loading";
import { redirectDocument, useNavigate } from "react-router-dom";
export const SignUpPage = ({ setSignUpPopUp }) => {
  const navigate = useNavigate();
  const [refreshTrue, setRefreshTrue] = useState(null);
  const [userAccess] = useIdToken(auth);
  useEffect(() => {
    if (userAccess) {
      setRefreshTrue(userAccess);
      navigate("/");
    }
  }, [userAccess]);
  console.log(refreshTrue);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userInput, setUserInput] = useState({
    firstName: "",
    sureName: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
  });

  console.log(userInput);
  const handSignUpForm = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInput.email, userInput.password);
    console.log(user);
  };

  if (user) {
    setSignUpPopUp(false);
  }
  if (error) {
    <div>
      <p>Error: {error.message}</p>
    </div>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div>
        {error && (
          <div>
            <p>Error: {error.message}</p>
          </div>
        )}
        <div className="signUpSection">
          <div className="signupContainer">
            <div className="signupTitle">
              <div className="exitFromSignup">
                <h1>Sign Up</h1>
                <span onClick={() => setSignUpPopUp(false)}>
                  <GiExitDoor />
                </span>
              </div>
              <p>It is quick and easy.</p>
            </div>
            <div className="line"></div>
            <div className="signUpForm">
              <form onSubmit={handSignUpForm}>
                <div className="creatorName">
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    onChange={(e) =>
                      setUserInput({
                        ...userInput,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Sure Name"
                    name="sureName"
                    onChange={(e) =>
                      setUserInput({
                        ...userInput,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="otherInfo">
                  <div>
                    <input
                      className="nameAndPass"
                      type="text"
                      name="email"
                      placeholder="Mobile number or email address"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <input
                      className="nameAndPass"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <span className="inputTitle">
                    Date <FaCircleQuestion />
                  </span>
                  <div className="signUpdate">
                    <input
                      type="date"
                      name="dateOfBirth"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <span className="inputTitle">
                  Gender <FaCircleQuestion />
                </span>
                <div className="genderInfo">
                  <span className="genderBorder">
                    <span>Female</span>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </span>
                  <span className="genderBorder">
                    <span>Male</span>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </span>
                  <span className="genderBorder">
                    <span>Custom</span>
                    <input
                      type="radio"
                      name="gender"
                      value="custom"
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </span>
                </div>
                <span className="submitBtn">
                  <button type="submit" className="signupBtn">
                    Signup
                  </button>
                </span>
              </form>
              <div className="toggleToCreateAccount">
                {/* <button>
              <NavLink>Create account</NavLink>
            </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
