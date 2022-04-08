import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

export default function useToken() {
  const getToken = () => {
    const tokenString: any= sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken:any) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }

}
export const useMediaQueryWrapper = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-device-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return { isLargeScreen, isSmallScreen };
};