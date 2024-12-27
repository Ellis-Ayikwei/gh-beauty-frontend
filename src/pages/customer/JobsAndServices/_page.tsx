import JobsAndServiceCard from "../../../components/customers/JobsAndServiceCard";
import { JobsAndServicesData } from "../../../data";
import ProfileNav from "../Dashboard/ProfileNav";

const JobsAndServices = () => {
  return (
    <>
      <div className="justify-center bg-slate-100">
        <ProfileNav />
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 md:mx-72 place-content-center mt-9">
          {JobsAndServicesData?.map((js: any, i: number) => (
            <JobsAndServiceCard
              key={i}
              img={js.image}
              header={js.header}
              desc={js.desc}
              price={js.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobsAndServices;
