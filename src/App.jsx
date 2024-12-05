
import {  Routes, Route, Link } from "react-router-dom";
import CustomTable from "./routes/CustomTable";
import CustomForm from "./routes/CustomForm";
import CustomDatePicker from "./routes/CustomDatePicker";

const App = () => {
  return (
    
      <div>
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li><Link to="/table">Custom Table</Link></li>
            <li><Link to="/form">Custom Form</Link></li>
            <li><Link to="/datepicker">Custom Date Picker</Link></li>
          </ul>
        </nav>
        <div style={styles.content}>
          <Routes>
            <Route path="/table" element={<CustomTable />} />
            <Route path="/form" element={<CustomForm />} />
            <Route path="/datepicker" element={<CustomDatePicker />} />
          </Routes>
        </div>
      </div>
    
  );
};

const styles = {
  navbar: { padding: "10px", background: "#333", color: "#fff" },
  navList: { listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 },
  content: { padding: "20px" },
};

export default App;
