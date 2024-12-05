

const TableBody = ({ data, columnConfig }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columnConfig.map((col, colIndex) => (
            <td key={colIndex}>{row[col.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
