import { LOGIN_ROUTE, SIGN_UP_ROUTES } from "../constants/baseurl";



export function LoginUser(email, pass) {
  const options = {
    // complete the routes
  };

  return fetch(LOGIN_ROUTE, options).then((response) => {
    if (!response.ok) throw Error({ msg: response.statusText });

    return response.json();
  });
}

export function SignUpInd(name, password, email, contactNumber) {
 

  const options = {
  
    // complete the routes
  };

  return fetch(SIGN_UP_ROUTES.ind, options).then((response) => {
    if (!response.ok) throw Error({ msg: response.statusText });

    return response;
  });
}
