import "./App.css";
import Split from "react-split-grid";

function App() {
  return (
    <>
      <div className="grid">
        <div>HTML</div>
        <div>CSS</div>
        <div>JS</div>
        <div>Result</div>
        <div className="horizontal-gutter"></div>
        <div className="vertical-gutter"></div>
      </div>
      <Split
        minSize={100}
        cursor="col-resize"
        columnGutters={[
          {
            track: 1,
            element: document.querySelector(".vertical-gutter") as HTMLElement,
          },
        ]}
        rowCursor="resize"
        rowGutters={[
          {
            track: 1,
            element: document.querySelector(
              ".horizontal-gutter"
            ) as HTMLElement,
          },
        ]}
      />
    </>
  );
}

export default App;
