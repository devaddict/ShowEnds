import React from "react";
import Siteheader from "../src/components/common/Header";
import Showlist from "./components/shows/Showlist";
import Dataconnect from "./Dataconnect";

function App() {
  const showList = Dataconnect.request.getShows();
  return (
    <div>
      <Siteheader />
      <Showlist shows={showList} />
    </div>
  );
}

export default App;
