import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Images } from "../../../Assets";
import Button from "../../../components/button/_component";

const Login = () => {
  const [password, setPassword] = React.useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setLoading(true);
  };

  const passwordToggle = () => {
    setPassword(!password);
  };

  const handleClick = () => {};

  return (
    <>
      <div className="relative flex h-screen bg-white md:grid place-items-center">
        <div className="flex">
          <div className="flex items-center">
            <div className="md:m-auto h-full mt-60 mx-5 px-[55px] py-[42px] md:w-[420px] rounded-l-[46px] text-white shadow-[0px_0px_2px_0.1px_#555252]">
              <h3 className="font-bold text-black text-[24px]">
                Log in to GH Beauty
              </h3>
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h3 className="text-[24px] font-500">Let's connect you</h3>
                  <p className="text-[12px] font-light">Sign in</p>
                </div>
                <div className="w-full mt-5">
                  <label className="text-black text-[11px]">
                    User Email or Phone
                  </label>
                  <div className="w-full relative flex rounded-[28px] border-white border-[0.5px]">
                    <input
                      placeholder="Email or Phone"
                      className="outline-none block w-full text-[11px] bg-[#ECE6F0] p-[12px] rounded-[28px]"
                      {...register("username", { required: true })}
                    />
                    <div className="absolute right-5 top-3">
                      <img className="w-[16px]" src={Images.profile1} alt="" />
                    </div>
                  </div>
                  {errors.username && (
                    <span className="text-red-500 text-[11px]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-3">
                  <label className="text-[11px] text-black">
                    Enter Password
                  </label>
                  <div className="w-full relative flex rounded-[28px] border-white border-[0.5px]">
                    <div className="flex-grow">
                      <input
                        placeholder="Password"
                        type={password ? "text" : "password"}
                        className="outline-none block w-full text-[11px] bg-[#ECE6F0] p-[12px] rounded-[28px]"
                        {...register("password", { required: true })}
                      />
                    </div>
                    <div className="absolute top-2 right-3">
                      <span onClick={passwordToggle} className="cursor-pointer">
                        {password ? (
                          <img className="w-6" src={Images.eyeClosed} alt="" />
                        ) : (
                          <img className="w-6" src={Images.eyed} alt="" />
                        )}
                      </span>
                    </div>
                  </div>
                  {errors.password && (
                    <span className="text-red-500 text-[11px]">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="w-full mt-6 ">
                  <Button
                    classNames="bg-[#083C6C] border-[1px] w-full !py-[12px] mr-4 !text-[13px]"
                    name="Sign up"
                    type="submit"
                    onClick={handleClick}
                    isLoading={loading}
                  />
                </div>

                <div
                  onClick={() => navigate("/lo")}
                  className="flex justify-center text-sm text-center underline cursor-pointer"
                >
                  Signup
                </div>
                <div className="flex justify-center">
                  <div className="flex">
                    <img
                      className="mr-8 cursor-pointer rounded-full border-[1px] p-1 border-black"
                      src={Images.apple}
                      alt=""
                    />
                    <img
                      className="rounded-full cursor-pointer border-[1px] p-1 border-black"
                      src={Images.google}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-3 text-black ">
                  <small>
                    Don't have an account?{" "}
                    <span
                      onClick={() => navigate("/signup")}
                      className="text-[#083C6C] cursor-pointer underline"
                    >
                      Sign up
                    </span>
                  </small>
                </div>
              </form>
            </div>
          </div>
          <img
            className="rounded-tr-[43px] rounded-br-[47px] brightness-50"
            src={Images.loginImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
