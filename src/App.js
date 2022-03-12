import { useState } from "react";
import TextField from "../TextField";
import "./styles.css";
export default function App() {
  const [value, setValue] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "Express.js" }
  ]);
  const [selectApi, setSelectApi] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "C++" },
    { key: 2, label: "C#" }
  ]);
  return (
    <div className="App">
      <TextField
        chipData={value}
        setData={setValue}
        selectData={selectApi}
        chipColor="secondary"
        chipSize="large"
        inputSize="small"
        inputLabel="enter here.."
        inputContained="outlined"
        inputFullWidth={true}
        select={true}
      />
    </div>
  );
}
