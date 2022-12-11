import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../store/actions/itemAction";
import FormAdd from "../components/FormAdd";
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
            <FormAdd
              input={input}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleCancelSubmit={handleCancelSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
