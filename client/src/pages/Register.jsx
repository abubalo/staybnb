import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      lastName: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("password is required"),

      // confirmPassword: yup.string()
      // .oneOf([yup.ref('password'), null], 'Passwords must match')
      // .required('Confirm password is required'),
    }),

    onSubmit: async (values) => {
      try{
        await axios.post("/register", values);
      }catch(err){
        alert("Registration error")
      }
    },
  });
  console.log(formik.errors);
  return (
    <div className="flex h-80v  justify-center items-center">
      <form
        action=""
        className="w-[350px] flex flex-col justify-between items-center mt-8 p-3 space-y-3 border-2 border-slate-100 rounded-lg"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl font-semibold ">Sign up</h1>
        <div className="w-full flex flex-col">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            placeholder="John"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            placeholder="Doe"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yourname@gmail.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="relative w-full flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type={visible ? "text" : "password"}
            placeholder="*******"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div
            onClick={() => setVisible(!visible)}
            className="absolute text-slate-400 cursor-pointer right-3 translate-y-8"
          >
            {visible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            )}
          </div>
        </div>
        {/* <div className="w-full flex flex-col">
            <label htmlFor="email">Confirm Password</label>
            <input type="password" placeholder="**eee" name="confirmPass" 
            value={formik.values.confirmPass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
          </div> */}

        <button type="submit" className="primary font-semibold">
          Sign up
        </button>
        <small>
          Already have a user{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:text-primaryLight"
          >
            sign in
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Register;
