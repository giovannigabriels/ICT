import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RowTable from "../components/RowTable";
import { fetchItem } from "../store/actions/itemAction";

export default function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemReducer);
  const navigate = useNavigate();
  let [loading, setLoading] = useState(true);
  const handleToDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  const handleToAdd = () => {
    navigate("/additem");
  };
  useEffect(() => {
    dispatch(fetchItem()).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return `Loading...`;
  } else {
    return (
      <>
        <div className="overflow-x-auto m-10">
          <div className="flex flex-row justify-between w-full">
            <label
              className="btn modal-button m-5"
              onClick={handleToAdd}>
              Add Item
            </label>
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => {
                return (
                  <RowTable
                    dispatch={dispatch}
                    handleToDetail={handleToDetail}
                    item={item}
                    idx={idx}
                    key={idx}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
