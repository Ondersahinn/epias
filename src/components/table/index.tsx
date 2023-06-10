interface IProps {
  data: any;
}

const Table = ({ data }: IProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {data?.title.map((e: string) => {
              return <th key={e}>{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.map((row: any, index: number) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.contract}</td>
              <td>{row.offer}</td>
              <td>{row.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
