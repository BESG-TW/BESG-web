import { MediaQueries } from './mediaQueries';
import BESGColors from './color';

enum ThemeName {
  BESG,
}

const Colors = {
  [ThemeName.BESG]: BESGColors,
};

const Theme = {
  ...MediaQueries,
  colors: Colors,
};

export { ThemeName };

export default Theme;
