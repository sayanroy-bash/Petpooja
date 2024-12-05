

const FilterInput = ({ columnConfig, onFilterChange }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {columnConfig.map((col, index) =>
        col.filterable ? (
          <input
            key={index}
            type="text"
            placeholder={`Filter by ${col.title}`}
            onChange={(e) => onFilterChange(col.key, e.target.value)}
            style={{ marginRight: "10px" }}
          />
        ) : null
      )}
    </div>
  );
};

export default FilterInput;
