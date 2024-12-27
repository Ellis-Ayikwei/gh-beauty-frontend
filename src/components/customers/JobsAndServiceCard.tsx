import { useNavigate } from "react-router-dom";
import { IJobsAndServiceCard } from "../../core/interfaces";
import { Images } from "../../Assets";
import moment from "moment";

const JobsAndServiceCard = (props: IJobsAndServiceCard) => {
  const navigate = useNavigate();
  const date = new Date();
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          onClick={() => navigate(`/customer/jobs&serviceDetails`)}
          className={`${props.otherClassNames} flex cursor-pointer flex-col`}
        >
          <div className="relative">
            <img
              src={props.img}
              alt="image"
              className="md:h-[150px] h-[120px] object-cover rounded-t-[15px]"
            />
            <div className="bg-[#FEF9C3] px-3 py-1 rounded-full absolute flex items-center left-2 top-2">
              <img
                className="w-1 h-1 mr-2"
                src={Images.g_bullet}
                alt="bullet"
              />
              <small className="text-[#EAB308] text-[11px] shorten-text">
                hello world
              </small>
            </div>
          </div>
          <div className="px-3 py-4 bg-white rounded-b-[15px]">
            <div className="flex justify-between">
              <div className="">
                <h3
                  className="font-semibold text-[13px] shorten-text max-w-[100px]"
                  title={props.header}
                >
                  {props.header}
                </h3>
                <h3
                  className="text-[#92929D] text-[10px] shorten-text max-w-[100px]"
                  title={props.desc}
                >
                  {props.desc}
                </h3>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <h3 className="text-[#AF7E00] font-semibold text-[13px]">
                GHS {props.price}
              </h3>
            </div>
            <div className="flex text-[#92929D] items-center justify-between text-[11px] mt-[2px]">
              <h3 className="shorten-text max-w-[70px]">{"Ghana"}</h3>
              <div className="flex items-center">
                <img className="mr-1" src={Images.bullet} alt="bullet" />
                <h3 className="shorten-text">{moment(date).fromNow()}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsAndServiceCard;
