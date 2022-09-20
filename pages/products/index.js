import React from "react";
import { useRouter } from "next/router";
export default function Products(props) {
  const router = useRouter();
  return (
    <div>
      <h1>Products</h1>
      {props.data?.map((product) => (
        <div>
          <span>{product.attributes.name}</span>
          <span>$ {product.attributes.price}</span>
          <button
            onClick={() => {
              router.push(`/products/${product.id}`);
            }}
          >
            Ver
          </button>
        </div>
      ))}
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const response = await fetch("http://localhost:1337/api/products");
  const responseStrapi = await response.json();
  return {
    props: {
      data: responseStrapi.data,
    },
  };
}
