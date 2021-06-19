import { useEffect } from 'react';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { NextComponentType } from 'next';

import DynamicTheme from '@/constants/themes/DynamicTheme';
import Meta from '@/modules/meta/Meta';
import DesktopHeader from '@/modules/components/Header/DesktopHeader';
import MobileHeader from '@/modules/components/Header/MobileHeader';
import useWindowSize from '@/hooks/useWindowSize';

const AppComponent: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps
> = ({ Component, pageProps }) => {
  const { width } = useWindowSize();

  useEffect(()=> {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
}, [])

  return (
    <DynamicTheme>
      <Meta />
      {width > 768 ? <DesktopHeader /> : <MobileHeader />}
      <Component {...pageProps} />
    </DynamicTheme>
  )
}

export default AppComponent;
