
import TCard from "./TCard";


const DashboardR = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-7 mb-lg-0 mb-4">
          < TCard
            title={"Built by developers"}
            sub_title={"Soft UI Dashboard"}
            description={
              "From colors, cards, typography to complex elements, you will find the full documentation."
            }
            imgSrc="/image.png"
          />
        </div>
        <div className="col-lg-5">
          <TCard
      
             customClass={
               "card-with-bg  bg-cover z-index-1 d-flex flex-column"
             }
             title={"Work with the rockets"}
             description={
               "Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first."
             }
           />
         </div>
        </div>
    </>
  );
};

export default DashboardR;