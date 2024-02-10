import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/services/cartSlice";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { CartItemType } from "../types/type";

const CartList = ({ carts }: { carts: CartItemType }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-12">
            <img className="w-full h-full rounded" src={carts.image} alt="" />
          </div>
          <div className="ml-4">
            <div className="sm:flex flex-col md:block text-sm font-medium text-gray-900">
              {carts.title.substring(0, 10)}
              <small className="text-[#ab7a5f] md:hidden">${carts.price}</small>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex gap-4 items-center text-gray-900 text-sm">
          <FaMinus
            onClick={() => dispatch(decreaseQuantity(carts))}
            className="text-lg font-bold cursor-pointer"
          />
          <p className="sm:text-xs md:text-lg font-bold ">{carts.quantity}</p>
          <FaPlus
            onClick={() => dispatch(increaseQuantity(carts))}
            className="text-lg font-bold cursor-pointer"
          />
        </div>
      </td>
      <td className="sm:hidden md:table-cell px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-[#ab7a5f]">${carts.price}</div>
      </td>
      <td className="sm:hidden md:table-cell px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-[#102a42]">
          ${carts.quantity * carts.price}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          onClick={() => dispatch(removeFromCart(carts))}
          className="bg-[#bb2525] w-7 h-7 flex justify-center items-center rounded cursor-pointer"
        >
          <MdDelete className="text-white" />
        </div>
      </td>
    </tr>
  );
};

export default CartList;
