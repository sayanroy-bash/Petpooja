
import DateInput from "./DateInput";

const CustomDateRange = ({ range, setRange }) => {
  const handleRangeChange = (field, value) => {
    setRange((prevRange) => ({ ...prevRange, [field]: value }));
  };

  return (
    <div>
      <DateInput
        label="From"
        value={range.from}
        onChange={(value) => handleRangeChange("from", value)}
      />
      <DateInput
        label="To"
        value={range.to}
        onChange={(value) => handleRangeChange("to", value)}
      />
    </div>
  );
};

export default CustomDateRange;
