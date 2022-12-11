import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneItem } from "../store/actions/itemAction";
import CardDetail from "../components/CardDetail";

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
  let [loading, setLoading] = useState(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return `Loading...`;
  } else {
    return (
      <div>
        <div className="bg-yellow-500">
          <p className="  font-bold text-2xl text-white text-center">
            {item.name}
          </p>
        </div>
        <div className="mx-50 my-10">
          <CardDetail item={item} />
        </div>
      </div>
    );
  }
}
