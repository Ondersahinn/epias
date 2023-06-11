import FilterTable from "components/filterTable";
import FormList from "components/formList";
import { useDispatch, useSelector } from "react-redux";
import {
  handleHorizantalDragChange,
  handleVerticalBottomDragChange,
  handleVerticalTopDragChange,
} from "redux/slice/dragSlice";
import Split from "react-split";
import { RootState } from "redux/reducers";
const Content = () => {
  const dispatch = useDispatch();
  const horizantal = useSelector((state: RootState) => state.drag.horizantal);
  const verticelBottom = useSelector(
    (state: RootState) => state.drag.verticelBottom
  );
  const verticelTop = useSelector((state: RootState) => state.drag.verticelTop);
  return (
    <>
      <Split
        className="split-vertical"
        direction="vertical"
        gutterAlign="start"
        id="vertical"
        snapOffset={40}
        dragInterval={20}
        onDrag={(e) => dispatch(handleHorizantalDragChange(e))}
      >
        <Split
          className="split"
          gutterAlign="start"
          snapOffset={40}
          dragInterval={20}
          id="split1"
          onDrag={(e) => dispatch(handleVerticalTopDragChange(e))}
        >
          <div>
            <FilterTable />
          </div>
          <div className="result-resize-drag">
            <div className="result-resize">
              <h2>Ayarlar</h2>
              <p>Yatay Pencere Değeri</p>
              {horizantal.length > 0 && (
                <p>%{horizantal[0] + " %" + horizantal[1]}</p>
              )}
              <p>Üst Dikey Pencere Değeri</p>
              {verticelTop.length > 0 && (
                <p>%{verticelTop[0] + " %" + verticelTop[1]}</p>
              )}
              <p>Alt Diket Pencere Değeri</p>
              {verticelBottom.length > 0 && (
                <p>%{verticelBottom[0] + " %" + verticelBottom[1]}</p>
              )}
            </div>
          </div>
        </Split>
        <Split
          className="split"
          gutterAlign="start"
          id="split2"
          snapOffset={40}
          dragInterval={20}
          onDrag={(e) => dispatch(handleVerticalBottomDragChange(e))}
        >
          <div>
            <FormList />
          </div>
          <div>**Lorem Ipsum**</div>
        </Split>
      </Split>
    </>
  );
};

export default Content;
