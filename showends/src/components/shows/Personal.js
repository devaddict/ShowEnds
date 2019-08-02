import React, { useState, useEffect } from "react";
import Showlist from "./../shows/Showlist";
import axios from "axios";

function Personal() {
  const [data, setShowList] = useState({ result: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://star-voteapi.azurewebsites.net/api/1/show/getshows"
      );
      setShowList(result.data);
    };
    fetchData();
  }, []);

  return <Showlist shows={data.result} />;
}

export default Personal;
