import { useState } from "react";
import PresetButtons from "./PresetButtons";
import CustomDateRange from "./CustomDateRange";

const DatePickerContainer = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [range, setRange] = useState({ from: "", to: "" });

  const handlePreset = (preset) => {
    const today = new Date();
    if (preset === "today") setSelectedDate(today.toISOString().split("T")[0]);
    else if (preset === "yesterday") {
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      setSelectedDate(yesterday.toISOString().split("T")[0]);
    }
  };

  return (
    <div>
      <h2>Custom Date Picker</h2>
      <PresetButtons onPresetSelect={handlePreset} />
      <CustomDateRange range={range} setRange={setRange} />
      <div>
        <strong>Selected Date:</strong> {selectedDate || `${range.from} - ${range.to}`}
      </div>
    </div>
  );
};

export default DatePickerContainer;
