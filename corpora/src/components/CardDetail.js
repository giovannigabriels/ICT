import { Link } from "react-router-dom";

export default function CardDetail({ item }) {
  return (
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
  );
}
