

const TableHeader = ({ columnConfig, onSortChange, sortConfig }) => {
  return (
    <thead>
      <tr>
        {columnConfig.map((col, index) => (
          <th
            key={index}
            onClick={() => col.sortable && onSortChange(col.key)}
            style={{ cursor: col.sortable ? "pointer" : "default" }}
          >
            {col.title}
            {sortConfig && sortConfig.key === col.key && (
              <span>{sortConfig.direction === "ascending" ? " 🔼" : " 🔽"}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
