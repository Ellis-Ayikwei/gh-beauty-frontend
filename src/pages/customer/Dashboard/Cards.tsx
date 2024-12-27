import Card from "../../../components/customers/Card";
import { ClientCardDashboardItems } from "../../../data";

const Cards = () => {
  return (
    <>
      <div className="flex justify-center mt-8 cursor-pointer">
        <div className="flex justify-center w-7/12 max-sm:w-10/12 max-sm:flex-col">
          {ClientCardDashboardItems?.map((cd: any, i: number) => (
            <Card
              key={i}
              title={cd.title}
              subTitle={cd.subTitle}
              jobs={cd.jobs}
              newJobs={cd.newJobs}
              cardImg={cd.cardImg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
