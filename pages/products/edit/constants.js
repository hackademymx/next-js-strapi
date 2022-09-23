export const initialState = {
  formData: {
    name: "",
    description: "",
    price: 0
  },
  submit: {
    loading: false,
    error: false,
    success: false,
    data: {},
  },
  inputFields: [
    {
      name: "name",
      label: "Product Name",
      placeholder: "Product Name",
      type: "text",
    },
    {
      name: "description",
      label: "Description product",
      placeholder: "Description product",
      type: "text",
    },
    {
      name: "price",
      label: "Price product",
      placeholder: "Price product",
      type: "number",
    },
  ],
};
