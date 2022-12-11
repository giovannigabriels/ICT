import { FETCH_ITEMS } from "./actionTypes";

const urlBase = "https://determined-fashion-fish.cyclic.app/items";

export const itemFetch = (payload) => {
  return {
    type: FETCH_ITEMS,
    payload,
  };
};
export const fetchItem = () => {
  return (dispatch, getState) => {
    return fetch(`${urlBase}`)
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

export const fetchOneItem = (id) => {
  return (dispatch, getState) => {
    return fetch(`${urlBase}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};

export const deleteItem = (id) => {
  return (dispatch, getState) => {
    fetch(`${urlBase}/${id}`, {
      method: "delete",
    })
      .then(() => {
        dispatch(fetchItem());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const addItem = (payload) => {
  return (dispatch, getState) => {
    fetch(`${urlBase}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
      })
      .then(() => {
        dispatch(fetchItem());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const putItem = (payload, id) => {
  return (dispatch, getState) => {
    fetch(`${urlBase}/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
      })
      .then(() => {
        dispatch(fetchItem());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
