export default function RowTable({ item, idx }) {
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
        <button className="btn btn-info">Detail</button>
        <button className="btn btn-success">Edit</button>
        <button className="btn btn-warning">Delete</button>
      </td>
    </tr>
  );
}
