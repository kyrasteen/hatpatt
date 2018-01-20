import variables from './variables';
import border from './common/border';

export default {
  ...border,
  height: variables.inputHeight,
  width: variables.fluid,
  padding: variables.padding,
  margin: variables.margin,
  color: variables.mainTextColor,
  fontSize: variables.mediumFontSize,
};
