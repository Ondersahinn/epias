import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { handleDataChange } from "redux/slice/formSlice";

const Form = () => {
  const data = useSelector((state: RootState) => state.form.data);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    delete values.id;
    const tempData = [...data];
    tempData.push(values as any);
    dispatch(handleDataChange(tempData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="id" name="id" placeholder="id giriniz" />
      <input type="text" id="key" name="key" placeholder="Kontrat giriniz" />
      <input type="text" id="value" name="value" placeholder="Teklif giriniz" />
      <input type="text" id="data" name="data" placeholder="Data giriniz" />
      <button type="submit">Kaydet</button>
    </form>
  );
};
export default Form;
