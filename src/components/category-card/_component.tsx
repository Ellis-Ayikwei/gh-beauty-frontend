import { ICategoriesCard } from "../../core/interfaces";

const CategoryCard = (props: ICategoriesCard) => {
  return (
    <>
      <div
        className="shadow-[0px_4px_9px_rgba(85,82,82,0.6)]
 bg-[#00BFAE1C] rounded-lg w-[313px] h-[212px] flex items-center justify-center"
      >
        <div className="">
          <img
            className="flex justify-center m-auto items-center w-[40px]"
            src={props.icon}
            alt=""
          />
          <h3 className="text-center">{props.label}</h3>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
