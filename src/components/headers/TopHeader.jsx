import { FaPhoneAlt } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";
const TopHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-secondary">
      <section className="flex gap-3 items-center">
        <BsMinecartLoaded className="text-xl md:text-3xl text-white" />
        <h2 className="text-xl md:text-3xl text-white">E-commerce</h2>
      </section>
      <section className="flex gap-3 items-center p-4">
        <FaPhoneAlt className="text-xl md:text-3xl text-white" />
        <p className="text-xl md:text-3xl text-white">05-111-1111</p>
      </section>
    </div>
  );
};

export default TopHeader;
