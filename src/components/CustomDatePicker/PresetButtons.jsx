

const PresetButtons = ({ onPresetSelect }) => {
  const presets = ["today", "yesterday", "thisMonth", "lastMonth"];

  return (
    <div style={{ marginBottom: "10px" }}>
      {presets.map((preset, index) => (
        <button
          key={index}
          onClick={() => onPresetSelect(preset)}
          style={{ marginRight: "10px" }}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
