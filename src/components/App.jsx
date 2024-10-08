import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEntry(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
      emoji={emojipedia.emoji}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(CreateEntry)}
    </div>
  );
}

export default App;
