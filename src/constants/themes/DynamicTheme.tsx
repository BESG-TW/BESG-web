import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';

import { PropsWithChildren } from 'react';

import themes, { ThemeName } from './index';

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
  }
`;

const DynamicTheme = ({
  activeTheme = ThemeName.BESG,
  children,
}: PropsWithChildren<{ activeTheme?: ThemeName }>) => {

  const { colors, ...otherThemes } = themes;
  const activeColor = colors[activeTheme];
  const color = {
    ...colors[ThemeName.BESG].common,
    ...activeColor.common,
  };
  const theme: DefaultTheme = { ...color };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default DynamicTheme;
