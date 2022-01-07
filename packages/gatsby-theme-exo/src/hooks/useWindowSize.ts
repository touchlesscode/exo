import { useState, useLayoutEffect } from 'react';

interface WindowState {
  width: number | undefined;
  height: number | undefined;
  type: string;
  types: Array<string>;
}

const getDeviceType = (
  windowWidth: number
): { [key: string]: () => boolean } => {
  return {
    sm: () => windowWidth <= 767,
    md: () => windowWidth > 767 && windowWidth <= 1023,
    lg: () => windowWidth > 1023 && windowWidth <= 1279,
    xl: () => windowWidth > 1279 && windowWidth <= 1535,
    xxl: () => windowWidth > 1535,

    mobilePortrait: () => windowWidth >= 320 && windowWidth <= 414,
    mobileLandscape: () => windowWidth >= 568 && windowWidth <= 812,

    tabletPortrait: () => windowWidth >= 768 && windowWidth <= 834,
    tabletLandscape: () => windowWidth >= 1024 && windowWidth <= 1112,

    laptopDisplay: () => windowWidth >= 1366 && windowWidth <= 1440,
    desktopDisplay: () => windowWidth >= 1680 && windowWidth <= 1920
  };
};
const getDeviceData = () => {
  if (typeof window === 'undefined') return null;
  const windowWidth = window.innerWidth;
  const deviceTypes = getDeviceType(windowWidth);
  const selectedDeviceTypes = Object.keys(deviceTypes).filter((i: string) => {
    const f: () => boolean = deviceTypes[i];
    return f();
  });
  const selectedDeviceType = selectedDeviceTypes[0] as string;
  return {
    width: windowWidth,
    height: window.innerHeight,
    type: selectedDeviceType,
    types: selectedDeviceTypes
  };
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowState | null>(
    getDeviceData()
  );
  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize(getDeviceData());
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('load', handleResize);
    window.addEventListener('reload', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('load', handleResize);
      window.removeEventListener('reload', handleResize);
    };
  }, []);
  return windowSize;
}
