const List = ({ lists, handleEdit, handleDelete }) => {
  return (
    <div className="btn">
      {lists.map((list, index) => (
        <p key={index}>
          {list.title}
          <input type="checkbox" checked={list.isChecked} />
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}> Delete</button>
        </p>
      ))}
    </div>
  );
};
export default List;
