import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneItem } from "../store/actions/itemAction";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    category: "",
  });
  useEffect(() => {
    dispatch(fetchOneItem(id))
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div>
      <div className="bg-yellow-500">
        <p className="  font-bold text-2xl text-white text-center">
          {item.name}
        </p>
      </div>
      <div className="mx-96 my-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={item.imgUrl}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-red-600 font-semibold">
              {" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item.price)}
            </h2>
            <span>Description : {item.description}</span>
            <span>Category : {item.category}</span>
            <div className="card-actions justify-end">
              <Link
                to={"/"}
                className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
