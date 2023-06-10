interface IProps {
  data: any;
  filter: Array<string>;
}

const Table = ({ data, filter }: IProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {filter.map((e: string) => {
              return <th key={e}>{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.map((row: any, index: number) => (
            <tr key={index}>
              {filter.includes("id") && <td>{row.id}</td>}
              {filter.includes("Kontrat") && <td>{row.contract}</td>}
              {filter.includes("Teklif") && <td>{row.offer}</td>}
              {filter.includes("Data") && <td>{row.data}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
