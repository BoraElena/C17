import React, { useState } from "react";
import "./App.css"

function App() {

  const ShoppingList = [
    "1.Mere",
    "2.Rsii",
    "3.Cascaval",
    "4.Sunca",
    "5.Paine",
    "6.Unt",
    "7.Iaurt",
    "8.Lapte",
  ];

  const [filterList, setFilterList] = useState(ShoppingList);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(ShoppingList);
      return;
    }
    const filteredValues = ShoppingList.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <div>
        Search: <input  type="text" onChange={handleSearch}/>
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
    </div>
  );
}
export default App;
