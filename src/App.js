import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;

// use for useRef
// function App() {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   });

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("users")}>Users</button>
//         <button onClick={() => setResourceType("comments")}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item.title)}</pre>;
//       })}
//     </>
//   );
// }

// export default App;
