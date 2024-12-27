import React from "react";
import { useForm } from "react-hook-form";
import { Images } from "../../../Assets";
import Button from "../../../components/button/_component";

const ConfirmOtp = () => {
  const [showPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setLoading(true);
  };

  const handleClick = () => {};

  return (
    <>
      <div className="flex h-screen bg-white md:grid place-items-center">
        <div className="relative !z-30 mt-14 w-full">
          <div className="md:m-auto border-noneborder-[1px] mx-5 px-[55px] py-[42px]  md:w-[420px] rounded-[20px] text-white backdrop-blur-md shadow-[0px_0px_9px_0.1px_#555252;]">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-center">
                <img
                  className="flex justify-center"
                  src={Images.verification}
                  alt=""
                />
              </div>

              <div>
                <h3 className="text-[30px] font-bold text-center text-black">
                  Verification
                </h3>
                <small className="text-[#9A9797] font-bold flex justify-center">
                  You will get an OTP via Email
                </small>
              </div>
              <div className="mt-3">
                <label className="text-[11px]">Enter otp</label>
                <div className="w-full flex mt-[1px] rounded-[6px] border-white border-[0.5px]">
                  <div className="flex-grow">
                    <input
                      placeholder="Otp"
                      type={showPassword ? "number" : "password"}
                      className="my-3 border-[2px] border-black w-full px-2.5 text-[11px] rounded-[26px] bg-[#ECE6F0] outline-0 p-3"
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-[11px]">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-2">
                <Button
                  classNames="bg-[#083C6C] uppercase border-[1px] w-full !py-[10px] mr-4 !text-[14px]"
                  name="Verify"
                  type="submit"
                  onClick={handleClick}
                  isLoading={loading}
                />
              </div>
              <div className="mt-12">
                <div className="flex justify-center -mt-3">
                  <small className="p-1 text-[13px] text-black rounded-xl">
                    Didn't receive the verificaiton OTP?
                    <small className="cursor-pointer text-[13px] ml-1 underline text-[#083C6C]">
                      Resend
                    </small>
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOtp;
