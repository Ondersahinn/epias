import FilterTable from "components/filterTable";
import "./App.css";
import Header from "./components/headers";
import Table from "./components/table";
import { data } from "./constants";
import FormList from "components/formList";

function App() {
  return (
    <>
      <Header />
      <FilterTable />
      <FormList />
    </>
  );
}

export default App;
