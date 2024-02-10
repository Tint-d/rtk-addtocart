import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { paths } from "../routes/path";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <div className=" h-12 bg-gray-200 shadow flex items-center justify-around ">
      <Link to={paths.products}>
        <h2 className=" font-bold text-lg">Navbar</h2>
      </Link>
      <div className=" relative">
        <span className=" absolute -top-3 left-3 flex justify-center items-center bg-green-600 text-white rounded-full p-1 h-5 w-5">
          {cart.length}
        </span>
        <Link to={paths.cart}>
          <FaCartPlus className=" text-xl text-gray-600 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
