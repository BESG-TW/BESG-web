import { MediaQueries } from './mediaQueries';
import BESGColors from './color';

enum ThemeName {
  BESG,
}

const Colors = {
  [ThemeName.BESG]: BESGColors,
};

const AWDProps = {
  web: {
    ...MediaQueries,
  },
};

const Theme = {
  ...AWDProps,
  colors: Colors
}

export { ThemeName };

export default Theme;
