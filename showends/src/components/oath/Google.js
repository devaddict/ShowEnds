import React, { useState } from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import axios from "axios";
function GoogleLoginBtn() {
  const [data, setShowList] = useState({ result: {} });

  const responseGoogle = response => {
    var googleObj = {};
    console.log(response);
    console.log(response.getAuthResponse().id_token);
    console.log(response.isSignedIn());
    console.log(response.profileObj);
    const fetchData = async () => {
      const result = await axios(
        "https://www.googleapis.com/plus/v1/people/me?access_token=" +
          response.getAuthResponse().id_token
      );
      //setShowList(result.data);
      console.log(result.data);
    };
    fetchData();
  };
  //https://www.googleapis.com/plus/v1/people/me?access_token=
  return (
    <GoogleLogin
      clientId="845088034066-pqcl8k4vdsu2stphn5itn54s83m8vdm9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleLoginBtn;
