import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormEdit from "../components/FormEdit";
import { addItem, fetchOneItem, putItem } from "../store/actions/itemAction";
import Swal from "sweetalert2";
export default function EditPage() {
  const { id } = useParams();
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
    dispatch(putItem(input, id))
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/");
  };
  useEffect(() => {
    dispatch(fetchOneItem(id))
      .then((data) => {
        setInput(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <FormEdit
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
