import React, { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router';
import { keepTokenFresh, refreshToken } from '../utils/tokenUtils';

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

export const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export const useTokenRefresh = () => {
  const [isRefreshingToken, setisRefreshingToken] = useState(true);
  const [isTokenFresh, setIsTokenFresh] = useState(checkToken());
  const [firstRender, setFirstRender] = useState(true);

  function checkToken() {
    const rightNow = new Date().getTime();
    const requeryTime = sessionStorage.getItem("requeryTime")
    return requeryTime ? (parseInt(requeryTime) > rightNow) : false;
  }
  const shouldRender = firstRender ? firstRender : isTokenFresh;
  useEffect(() => {
    // Attempt to refresh token and set up service to continously refresh token
    async function initializeToken() {
      await refreshToken();
      keepTokenFresh();
      setisRefreshingToken(false);
    }
    initializeToken();

    // Set up service to continously check if token is fresh
    const myInterval = setInterval(() => {
      if (!checkToken()) {
        setIsTokenFresh(false);
      }
    }, 1000);

    setFirstRender(false);

    // clean up
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return { shouldRender, isRefreshingToken }
}

export const useLoggedInUserDetails = () => {
  const [userDetails, setUserDetails] = useState("{}");
  useEffect(() => {
    setUserDetails(sessionStorage.getItem("userDetails") ?? "{}");
  }, [])
  return JSON.parse(userDetails);
}