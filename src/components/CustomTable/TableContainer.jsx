import { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import FilterInput from "./FilterInput";

const TableContainer = ({ data, columnConfig }) => {
  const [tableData, setTableData] = useState(data);
  const [filters, setFilters] = useState({});
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    let filteredData = [...data];
    for (let key in filters) {
      if (filters[key]) {
        filteredData = filteredData.filter((item) =>
          item[key].toString().toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    }
    if (sortConfig) {
      const { key, direction } = sortConfig;
      filteredData.sort((a, b) => {
        if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
        if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
        return 0;
      });
    }
    setTableData(filteredData);
  }, [filters, sortConfig, data]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleSortChange = (key) => {
    setSortConfig((prev) => {
      const newDirection =
        prev && prev.key === key && prev.direction === "ascending"
          ? "descending"
          : "ascending";
      return { key, direction: newDirection };
    });
  };

  return (
    <div>
      <FilterInput columnConfig={columnConfig} onFilterChange={handleFilterChange} />
      <table>
        <TableHeader
          columnConfig={columnConfig}
          onSortChange={handleSortChange}
          sortConfig={sortConfig}
        />
        <TableBody data={tableData} columnConfig={columnConfig} />
      </table>
    </div>
  );
};

export default TableContainer;
