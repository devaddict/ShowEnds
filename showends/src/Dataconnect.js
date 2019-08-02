import axios from "axios";
// var getShows = funtion (usertoken){
//   axios.get(`https://localhost:44314/api/${usertoken}/show/getshowlist`)
//     .then(res => {
//       const shows = res.data.result;
//       console.log(shows);
//       return "abc";
//     });
// };

export const getdata = usertoken =>
  fetch(
    `https://star-voteapi.azurewebsites.net/api/${usertoken}/show/getshowlist`
  ).then(response => response.json());

export var getShowList = async usertoken => {
  await axios.get(
    `https://star-voteapi.azurewebsites.net/api/${usertoken}/show/getshowlist`
  );

  //console.log(response.data);
};
