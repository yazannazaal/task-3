import house from "../assets/images/house.png";
import shoes from "../assets/images/shoes.png";

const Banner = () => {
  return (
    <figure className="flex flex-col  justify-between w-full  px-6 gap-3 py-4 md:flex-row">
      <img className="md:w-1/2 w-full" src={house} alt="house image" />
      <img className="md:w-1/2 w-full" src={shoes} alt="shoes image" />
    </figure>
  );
};

export default Banner;
