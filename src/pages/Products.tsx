import ProductList from "../components/ProductList";
import { useGetProductsQuery } from "../redux/api/productApi";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (error) {
    throw new Error("Something wrong!");
  }

  if (isLoading) {
    return (
      <p className=" flex justify-center items-center h-screen">loading...</p>
    );
  }

  return (
    <div className=" flex flex-wrap gap-7 justify-center my-10">
      {products?.map((product) => (
        <div key={product.id}>
          <ProductList product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
