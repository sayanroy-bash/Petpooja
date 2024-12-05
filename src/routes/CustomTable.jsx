
import TableContainer from "../components/CustomTable/TableContainer";

const CustomTable = () => {
  const data = [
    { id: 1, name: "John Doe", age: 28, city: "New York" },
    { id: 2, name: "Jane Smith", age: 34, city: "London" },
    { id: 3, name: "Mark Lee", age: 22, city: "Sydney" },
  ];

  const columnConfig = [
    { title: "ID", key: "id", sortable: true, filterable: true },
    { title: "Name", key: "name", sortable: true, filterable: true },
    { title: "Age", key: "age", sortable: true, filterable: true },
    { title: "City", key: "city", sortable: true, filterable: true },
  ];

  return <TableContainer data={data} columnConfig={columnConfig} />;
};

export default CustomTable;
