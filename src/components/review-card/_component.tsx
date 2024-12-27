import { IRecentReviewsCard } from "../../core/interfaces";

const RecentReviewsCards = (props: IRecentReviewsCard) => {
  return (
    <>
      <div className="flex w-[360px] border-[2px] border-gray-300 rounded-[12px] bg-red-50">
        <div className="w-[360px]">
          <div className="flex items-center p-4">
            <div className="mr-3 p-[8px] flex justify-center bg-black text-white rounded-full w-[40px] h-[40px]">
              {props.nameAvatar}
            </div>
            <div>
              <h3> {props.name}</h3>
              <h3>{props.time}</h3>
            </div>
          </div>
          <div>
            <img
              className="w-[360px] h-[187px] object-cover"
              src={props.image}
              alt=""
            />
          </div>
          <h3 className="p-4 text-[16px]">{props.title}</h3>
          <h3 className="p-4 text-[14px]">{props.description}</h3>

          <p className="p-4">{props.passage}</p>
          <div className="flex p-4">
            {props.starsRating?.map((sr: any, i: number) => (
              <img key={i} src={sr} alt="" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentReviewsCards;
