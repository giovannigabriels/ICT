import { useNavigate } from "react-router-dom";
import { deleteItem } from "../store/actions/itemAction";

export default function RowTable({ item, idx, handleToDetail, dispatch }) {
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
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
          className="btn btn-info"
          onClick={() => handleToDetail(item.id)}>
          Detail
        </button>
        <button
          className="btn btn-success"
          onClick={() => handleEdit(item.id)}>
          Edit
        </button>
        <button
          className="btn btn-warning"
          onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
