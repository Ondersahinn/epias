interface IProps {
  data: any;
  filter: { key: string; checked: boolean }[];
}

const Table = ({ data, filter }: IProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {filter?.filter((e) => e.checked).map((e) => {
              return <th key={e?.key}>{e.key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.map((row: any, index: number) => (
            <tr key={index}>
              {filter?.find((e: any) => e.key === "id")?.checked && (
                <td>{row.id}</td>
              )}
              {filter?.find((e: any) => e.key === "Kontrat")?.checked  && <td>{row.contract}</td>}
              {filter?.find((e: any) => e.key === "Teklif")?.checked  && <td>{row.offer}</td>}
              {filter?.find((e: any) => e.key === "Data")?.checked  && <td>{row.data}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
