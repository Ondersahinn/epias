import "./formList.scss";
import { useState } from "react";
import Form from "./form";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
const FormList = () => {
  const [formIsShow, setFormIsShow] = useState(false);
  const formData = useSelector((state:RootState) => state.form.data)

  return (
    <div className="form-list-container">
      {formData.map((e, index) => {
        return (
          <ul key={e.key}>
            <li>{e.key}</li>
            <li>{e.value}</li>
            <li>{e.data}</li>
          </ul>
        );
      })}
      {formIsShow && <Form />}
      <button onClick={() => setFormIsShow(!formIsShow)}>Yeni Ekle</button>
    </div>
  );
};

export default FormList;
