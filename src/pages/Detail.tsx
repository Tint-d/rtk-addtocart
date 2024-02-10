import { Link, useParams } from "react-router-dom";
import { useProductDetailQuery } from "../redux/api/productApi";
import { paths } from "../routes/path";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, isLoading } = useProductDetailQuery(Number(id));

  if (isLoading) {
    return (
      <p className=" flex justify-center items-center h-screen">Loading...</p>
    );
  }

  return (
    <div className="flex items-center gap-20  justify-center  max-w-full h-screen ">
      <img src={products?.image} className=" h-[30rem]" alt="" />
      <div className=" flex flex-col gap-3">
        <Link to={paths.products}>
          <button className=" bg-[#ab7a5f] text-white px-3 py-1 rounded-md">
            Back To Products
          </button>
        </Link>
        <h2 className=" text-[#102a42] font-bold text-2xl">
          {products?.title}
        </h2>
        <p className=" text-[#ab7a5f] text-xl font-bold">${products?.price}</p>
        <p className=" w-[28rem] tracking-wider leading-8">
          {products?.description}
        </p>
      </div>
    </div>
  );
};

export default Detail;
