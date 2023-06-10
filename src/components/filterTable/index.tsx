import Table from "components/table";
import { data } from "constants/index";
import { useState } from "react";
import { ReactComponent as SettingIcon } from "assets/icon/settings.svg";
import { ReactComponent as PlusIcon } from "assets/icon/plus.svg";
import { ReactComponent as ShareIcon } from "assets/icon/share.svg";
import "./filterTable.scss";
const FilterTable = () => {
  const [filter, setFilter] = useState([
    {
      key: "id",
      checked: true,
    },
    {
      key: "Kontrat",
      checked: true,
    },
    {
      key: "Teklif",
      checked: true,
    },
    {
      key: "Data",
      checked: true,
    },
  ]);
  const [tableData, setTableData] = useState(data);

  const contractSet = new Set();
  data.data.forEach((item) => {
    contractSet.add(item.contract);
  });

  return (
    <>
      <div className="filter-table-head">
        <select
          name="head"
          id="head"
          placeholder="Kontrat Seçiniz"
          onChange={(e) => {
            const tempData = { ...data };
            tempData.data = [
              ...tempData.data.filter(
                (element) => element.contract === e.target.value
              ),
            ];
            setTableData(tempData);
          }}
        >
          <option value="" disabled selected hidden>
            Kontrat Seçiniz
          </option>
          {Array.from(contractSet).map((e: any, index: number) => {
            return (
              <option value={e} key={e + index} defaultValue={e}>
                {e}
              </option>
            );
          })}
        </select>
        <div>
          <div className="dropdown">
            <button className="dropdown-btn">
              <SettingIcon
                width={24}
                height={24}
                className="dropdown-content"
              />
            </button>
            <ul className="dropdown-menu">
              {data.title.map((e) => {
                return (
                  <li key={"check" + e}>
                    <input
                      type="checkbox"
                      id={e}
                      name={e}
                      value={e}
                      defaultChecked={true}
                      onChange={(event) => {
                        const tempFilter = [...filter];
                        const findIndex = tempFilter.findIndex(
                          (element) => element.key === event.target.value
                        );
                        tempFilter[findIndex].checked = event.target.checked
                        setFilter(tempFilter)
                      }}
                    />
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
          <ShareIcon width={24} height={24} />
          <PlusIcon width={24} height={24} />
        </div>
      </div>
      <Table data={tableData} filter={filter} />
    </>
  );
};
export default FilterTable;
