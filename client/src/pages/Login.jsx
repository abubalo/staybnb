import React from "react";

const Login = () => {
  return (
    <div className="flex h-80v  justify-center items-center">
      <form action="" className="w-[350px] flex flex-col justify-between items-center mt-8 p-3 space-y-3 border-2 border-slate-200 rounded-lg">
        <h1 className="text-3xl font-semibold ">Login</h1>
        <div className="w-full flex flex-col">
          <label htmlFor="firstname">First name</label>
          <input type="text" placeholder="John" name="firstName" />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="lastname">Last name</label>
          <input type="text" placeholder="Doe" name="lastName"/>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="yourname@gmail.com" name="email"/>
        </div>
        <button className="primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
