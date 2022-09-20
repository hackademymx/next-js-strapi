import React from "react";

export default function Product(props) {
  return (
    <div>
      <h1>{props.data?.attributes.name}</h1>
      <span>
        <strong>Price:</strong> {props.data?.attributes.price}
      </span>
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const response = await fetch(
    `http://localhost:1337/api/products/${params.id}`
  );
  const responseStrapi = await response.json();
  return {
    props: {
      data: responseStrapi.data,
    },
  };
}
