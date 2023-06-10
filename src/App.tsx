import "./App.css";
import Header from "./components/headers";
import Table from "./components/table";
import { data } from "./constants";

function App() {
  return (
    <>
      <Header />
      <Table data={data} />
    </>
  );
}

export default App;
