import theme from '@app/theme/theme';

export const getColorsFill = (isGreen?: boolean, isRed?: boolean) => {
  if (isGreen)
    return {
      firstColorFill: theme.colors.apple,
      secondColorFill: theme.colors.screamin_green,
    };
  if (isRed)
    return {
      firstColorFill: theme.colors.bittersweet,
      secondColorFill: theme.colors.red_orange,
    };
  return {
    firstColorFill: theme.colors.iron,
    secondColorFill: theme.colors.iron,
  };
};
