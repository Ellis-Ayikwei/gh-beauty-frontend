import { recentReviews } from "../../data";
import RecentReviewsCards from "../../components/review-card/_component";

const Reviews = () => {
  return (
    <>
      <div className="mt-16">
        <h2 className="text-center font-bold text-[40px] mb-8">
          Recent Reviews
        </h2>
        <div className="flex justify-center md:max-w-[1700px] mx-auto gap-6 overflow-x-auto hide-scrollbar">
          {recentReviews.map((rev: any, i: number) => (
            <RecentReviewsCards
              key={i}
              starsRating={rev.stars}
              description={rev.description}
              passage={rev.review}
              image={rev.image}
              title={rev.title}
              time={rev.time}
              name={rev.name}
              nameAvatar={rev.nameAvatar}
            />
          ))}
        </div>
        <h3 className="text-[#00BFAE] cursor-pointer text-[16px] mt-5 text-center">
          Show more Reviews
        </h3>
        <hr className="border-t-[#EDEAEA] border-2 my-6" />
      </div>
    </>
  );
};

export default Reviews;
