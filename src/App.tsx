import FilterTable from "components/filterTable";
import "./App.css";
import Header from "./components/headers";
import Table from "./components/table";
import { data } from "./constants";

function App() {
  return (
    <>
      <Header />
      <FilterTable />
    </>
  );
}

export default App;
