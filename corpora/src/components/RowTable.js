import { useNavigate } from "react-router-dom";
import { deleteItem } from "../store/actions/itemAction";
import Swal from "sweetalert2";

export default function RowTable({ item, idx, handleToDetail, dispatch }) {
  const handleDelete = (id) => {
    Swal.fire({
      title: `Are you sure you want to delete ${item.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(id)).finally(() => {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `Delete ${item.name} Success!`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  };
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{item.name}</td>
      <td>
        <img src={item.imgUrl} />
      </td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
      <td>
        <button
          className="btn btn-info mx-2"
          onClick={() => handleToDetail(item._id)}>
          Detail
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => handleEdit(item._id)}>
          Edit
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => handleDelete(item._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
