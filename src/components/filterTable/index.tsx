import Table from "components/table";
import { data } from "constants/index";
import { useState } from "react";
import { ReactComponent as SettingIcon } from "assets/icon/settings.svg";
import { ReactComponent as PlusIcon } from "assets/icon/plus.svg";
import { ReactComponent as ShareIcon } from "assets/icon/share.svg";
import "./filterTable.scss";
const FilterTable = () => {
  const [filter, setFilter] = useState(data.title);
  const [tableData, setTableData] = useState(data);

  const contractSet = new Set();
  data.data.forEach((item) => {
    contractSet.add(item.contract);
  });

  console.log('flter',filter)
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
          {Array.from(contractSet).map((e: any) => {
            return (
              <option value={e} key={e}>
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
                  <li>
                    <input
                      type="checkbox"
                      id={e}
                      name={e}
                      value={e}
                      key={e}
                      defaultChecked={true}
                      onChange={(event) => {
                        const tempFilter = [...filter]
                        const findElement = filter.some((element) => element === event.target.value)
                        if(event.target.checked && !findElement) {
                            tempFilter.push(e)
                            setFilter(tempFilter)
                        }
                        else {
                            setFilter(filter.filter((filter) => filter !== e))
                        }
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
