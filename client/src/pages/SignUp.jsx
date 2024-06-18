import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-5 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* leftside */}
        <div className="flex-1">
          <span className="text-xl text-gray-500 block mb-1">Hello,</span>
          <Link to="/" className="font-bold dark:text-white text-4xl">
            Abdul Rahman
          </Link>
          <p className="text-sm mt-5 font-[500] text-gray-500">
            I'm a creative web designer based in Maharastra India, and i'm very
            passionate and dedicated to my work.
          </p>
        </div>
        {/* rightside */}
        <div className="flex-1">
          <form>
            <div>
              <Label value="Your Name" />
              <TextInput
                type="text"
                placeholder="Your Name"
                id="name"
                required={true}
              />
            </div>
            <div className="mt-2">
              <Label value="Abdul" />
              <TextInput
                type="text"
                placeholder="abdul001"
                id="username"
                required={true}
              />
            </div>
            <div className="mt-2">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="abdul123@portfolio.com"
                id="email"
                required={true}
              />
            </div>
            <div className="mt-2">
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                required={true}
              />
            </div>
            <Button
              className="w-full mt-5"
              gradientDuoTone="pinkToOrange"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account? </span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
