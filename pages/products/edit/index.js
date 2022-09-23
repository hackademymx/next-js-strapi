import React, { useReducer } from "react";
import { reducer, actions, initialState } from "./reducer";
import styles from "./styles.module.css";
import { Button } from "../../../components/Buttons";
export default function Edit() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: actions.UPDATE_FORM_DATA,
      payload: {
        name: name,
        value: value,
      },
    });
  };
  const handleSubmit = async () => {
    dispatch({
      type: actions.SUBMIT_REQUEST,
    });
    await fetch("http://localhost:1337/api/products/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: state.formData,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: actions.SUBMIT_SUCCESS,
          payload: data.data,
        });
      });
  };
  return (
    <div>
      <form className={styles.my__form} onSubmit={(e) => e.preventDefault()}>
        <h2>Edit Product</h2>
        {state.inputFields.map((input, index) => (
          <>
            <label>{input.label}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              onChange={handleChange}
              value={state.formData[input.name]}
            />
          </>
        ))}
        <Button
          text={state.submit.loading ? "Loading" : "Save form"}
          onClick={handleSubmit}
        />
        {state.submit.success && (
          <span>
            Published at : {state.submit.data?.attributes?.publishedAt}
          </span>
        )}
      </form>
    </div>
  );
}
