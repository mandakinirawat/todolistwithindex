const Form = ({ formData, setFormData, handleAdd }) => {
  console.log(formData);
  return (
    <div>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />

      <input
        type="checkbox"
        name="isChecked"
        checked={formData.isChecked}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.checked })
        }
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default Form;
