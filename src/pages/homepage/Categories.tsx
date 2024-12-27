import CategoryCard from "../../components/category-card/_component";
import { categoryCards } from "../../data";

const Categories = () => {
  return (
    <>
      <div className="mt-16">
        <h3 className="text-center font-bold text-[40px] md:max-w-[1700px] mb-8 mx-auto">
          Categories
        </h3>
        <div className="flex items-center justify-between md:max-w-[1700px] mx-auto">
          {categoryCards?.map((category: any, i: number) => (
            <CategoryCard
              key={i}
              label={category.title}
              icon={category.image}
            />
          ))}
        </div>
        <h3 className="text-[#00BFAE] text-[16px] cursor-pointer mt-5 text-center">
          More
        </h3>
        <hr className="border-t-[#EDEAEA] border-2 mt-5" />
      </div>
    </>
  );
};

export default Categories;
