import { addToCart } from "../redux/services/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../redux/api/productApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartItemType } from "../types/type";

const ProductList = ({ product }: { product: CartItemType }) => {
  const dispatch = useDispatch();
  const { error, isLoading } = useGetProductsQuery();
  const carts = useSelector((state: RootState) => state.cart.cart);
  const notify = () => toast("This item is already exist!");

  if (error) {
    return <></>;
  }

  if (isLoading) {
    return (
      <p className=" flex justify-center items-center h-screen">loading...</p>
    );
  }

  const addToCartFun = (product: CartItemType) => {
    dispatch(addToCart(product));
    const isExist = carts.find((item) => item.id === product.id);
    if (isExist) {
      notify();
    }
  };

  return (
    <div className=" w-72 max-h-96 shadow-lg h-80 rounded cursor-pointer hover:scale-105 transition-all">
      <img className=" h-32 p-2" src={product.image} alt="" />
      <div className=" h-32 ml-2">
        <h2 className=" mt-2 font-bold">{product.title.substring(0, 10)}</h2>
        <p className=" mt-auto text-sm text-gray-600">
          {product.description.substring(0, 150)}...
        </p>
      </div>
      <div className="flex mt-auto gap-3 ml-3">
        <button
          onClick={() => addToCartFun(product)}
          className=" bg-gray-500 text-white px-3 py-1 rounded-lg "
        >
          <FaCartPlus className=" text-xl" />
        </button>

        <Link to={`/detail/${product.id}`}>
          <button className=" bg-gray-500 text-white px-3 py-1 rounded-lg">
            <BiMessageDetail className=" text-xl" />
          </button>
        </Link>
      </div>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default ProductList;
