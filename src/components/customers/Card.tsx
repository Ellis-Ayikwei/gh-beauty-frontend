import { ICard } from "../../core/interfaces";

const Card = (props: ICard) => {
  return (
    <div className="flex items-center justify-between w-full h-full p-10 mr-8 duration-700 bg-white max-sm:mb-8 max-sm:p-2 max-sm:flex-col hover:shadow-lg hover:rounded-lg hover:shadow-gray-600 mobile:shadow-2xl mobile:shadow-gray-600 slide-in-left mobile:slide-in-left">
      <img className="w-20 h-24 md:hidden" src={props.cardImg} alt="" />
      <div className="">
        <div className="text-sm font-bold max-sm:text-xs">{props.title}</div>
        <div className="text-5xl mb-7">{props.jobs}</div>
        <div className="text-sm font-bold max-sm:text-xs">{props.subTitle}</div>
        <div className="text-4xl text-green-500">{props.newJobs}</div>
      </div>
      <img className="w-20 h-24 max-sm:hidden" src={props.cardImg} alt="" />
    </div>
  );
};

export default Card;
