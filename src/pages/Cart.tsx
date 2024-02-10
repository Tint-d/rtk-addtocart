import { Link } from "react-router-dom";
import CartList from "../components/CartList";
import { clearCart } from "../redux/services/cartSlice";
import { paths } from "../routes/path";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { CartItemType } from "../types/type";

const Cart = () => {
  const carts = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.totalAmount);

  const dispatch = useDispatch();

  return (
    <>
      {carts.length > 0 ? (
        <div className="mx-5 md:overflow-x-auto mt-5 ">
          <table className="min-w-full md:divide-y md:divide-gray-200">
            <thead>
              <tr>
                <th className="sm:hidden md:table-cell px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="sm:hidden md:table-cell px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="sm:hidden md:table-cell  px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider ">
                  Price
                </th>
                <th className="sm:hidden md:table-cell px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider ">
                  SubTotal
                </th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((carts: CartItemType) => (
                <CartList key={carts.id} carts={carts} />
              ))}
            </tbody>
          </table>
          <hr className="my-4 text-gray-200" />
          <div className="flex justify-between items-center mx-5 md:mx-10 ">
            <h2 className=" text-lg font-semibold text-gray-700">Total</h2>
            <p className="font-semibold text-gray-700">${total.toFixed(2)}</p>
          </div>
          <div className=" flex gap-4 md:justify-around mx-5 mt-5">
            <Link to={paths.products}>
              <button className=" bg-[#ab7a5f] text-white px-3 py-1 rounded-md">
                Continuce Shopping
              </button>
            </Link>
            <button
              onClick={() => dispatch(clearCart())}
              className=" bg-black text-white px-3 py-1 rounded-md"
            >
              Clear Shopping Cart
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center h-screen">
          <h2 className=" font-bold text-gray-500  text-2xl mb-2">
            Your cart is empty
          </h2>
          <Link to={paths.products}>
            <button className=" bg-[#ab7a5f] text-white px-3 py-1 rounded-md">
              Continuce Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
