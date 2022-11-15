import React, { useState } from "react";

function App() {
  const [condicion, setCondicion] = useState(false);
  return (
    condicion ? <h2>Holo</h2> : <h2>Hole</h2>
  );
}

export default App;
