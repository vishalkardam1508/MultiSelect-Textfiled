# MutliSelect-TextInput-with-Chips

# Textfield with chips

[visit](https://in.linkedin.com/in/vishal-kardam-425186220) for any help

```js
import { useState } from "react";
import TextField from "../TextField";
export default function App() {
  // store chips data by user
  const [value, setValue] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "Express.js" }
  ]);
  // Data comes from api
  const [selectApi, setSelectApi] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "C++" },
    { key: 2, label: "C#" }
  ]);
  return (
    <div className="App">
      <TextField
        // pass state for selected chips
        chipData={value}
        //  pass state for getting chips value
        setData={setValue}
        // pass api data
        selectData={selectApi}
        // chip-styles
        chipColor="secondary"
        chipSize="large"
        // Input styles
        inputSize="small"
        inputLabel="enter here.."
        inputContained="outlined"
        inputFullWidth={true}
        select={true}
      />
    </div>
  );
}
```

> Please see full example.

#Contributers

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<td align="center">
		<a href="https://in.linkedin.com/in/vishal-kardam-425186220">
			<img src="https://avatars.githubusercontent.com/u/90035664?v=4" width="100px;" alt="Vishal Kardam"/>
			<br />
			<sub><b>Vishal kardam</b></sub>
		</a><br />
		<a href="#ideas-vishalkardam" title="Ideas, Planning, & Feedback">🤔</a> 
		<a href="#" title="Code">💻</a> 
		<a href="https://github.com/vishalkardam1508" title="Documentation">📖</a>
	</td>
