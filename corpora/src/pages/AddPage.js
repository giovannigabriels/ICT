import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../store/actions/itemAction";

export default function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    category: "",
  });
  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleCancelSubmit = () => {
    setInput({
      name: "",
      description: "",
      price: "",
      imgUrl: "",
      category: "",
    });
    navigate("/");
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addItem(input));
    navigate("/");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="price"
                  className="input input-bordered"
                  name="price"
                  value={input.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  name="imgUrl"
                  value={input.imgUrl}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="input input-bordered"
                  name="category"
                  value={input.category}
                  onChange={handleChange}
                  required>
                  <option
                    disabled
                    value="">
                    ==Please Select Category==
                  </option>

                  <option value="Main Menu">Main Menu</option>

                  <option value="Beverage">Beverage</option>

                  <option value="Snack">Snack</option>
                  <option value="Desert">Desert</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleSubmit}>
                  Submit Add
                </button>
                <button
                  className="btn btn-error"
                  onClick={handleCancelSubmit}>
                  Cancel Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
