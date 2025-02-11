import React, { useState } from "react";

const App = () => {
  const [items] = useState(["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"]);
  const [filter, setFilter] = useState("");

  const filteredItems = items.filter(item => 		  item.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="container">
      <h1>Item List</h1>
      <input 
        type="text" 
        placeholder="Search items..." 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
