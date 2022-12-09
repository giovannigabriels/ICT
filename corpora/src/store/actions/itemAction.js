import { FETCH_ITEMS } from "./actionTypes";

const urlBase = "http://localhost:3001/items";

export const itemFetch = (payload) => {
  return {
    type: FETCH_ITEMS,
    payload,
  };
};
export const fetchItem = () => {
  return (dispatch, getState) => {
    fetch(`${urlBase}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(itemFetch(data));
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};
