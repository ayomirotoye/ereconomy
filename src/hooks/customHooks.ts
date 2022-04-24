import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

export default function useToken() {
  const getToken = () => {
    const tokenString: any = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }

}

const handleSmallScreenChange = (matches: boolean) => {
  return matches;
}

export const useMediaQueryWrapper = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 576 }, undefined, handleSmallScreenChange);
  const isMediumScreen = useMediaQuery({ query: `(max-width: 768px)` });
  const isLargeScreen = useMediaQuery({ query: "(min-device-width: 992px)" });
  const isExtraLargeScreen = useMediaQuery({ query: "(min-device-width: 1200px)" });
  const isExtraExtraLargeScreen = useMediaQuery({ query: "(min-device-width: 1400px)" });

  return {
    isLargeScreen,
    isSmallScreen, 
    isMediumScreen,
    isExtraLargeScreen,
    isExtraExtraLargeScreen
  };
};