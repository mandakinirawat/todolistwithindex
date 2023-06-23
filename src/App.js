import "./styles.css";
import Form from "./Form";
import List from "./List";
import { useState } from "react";

export default function App() {
  const initialFormData = {
    id: -Infinity,
    title: "",
    isChecked: false
  };
  const [formData, setFormData] = useState(initialFormData);

  const [lists, setList] = useState([
    {
      title: "happy home",
      isChecked: true
    },
    {
      title: "simple living",
      isChecked: false
    }
  ]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (formData.id === -Infinity) {
      setList([...lists, formData]);
    } else {
      lists[formData.id] = formData;
      setList([...lists]);
    }
    setFormData(initialFormData);
  };

  const handleEdit = (index) => {
    const editList = lists[index];
    setFormData({ ...editList, id: index });
  };
  const handleDelete = (i) => {
    console.log(i);
    const newList = lists.filter((list, index) => index !== i);

    setList([...newList]);
    // lists.splice(index, 1);
    // setList([...lists]);
  };

  return (
    <div className="App">
      <Form
        formData={formData}
        setFormData={setFormData}
        handleAdd={handleAdd}
      />
      <List lists={lists} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}
