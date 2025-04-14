import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {SvgIconsProps} from '../../../../interfaces';

const IconVisibleOff = ({
  firstColorFill,
  secondColorFill,
  ...restProps
}: SvgIconsProps) => (
  <Svg width={24} height={24} fill="none" {...restProps}>
    <Path
      fill="url(#a)"
      d="M12 6c-3.821 0-7.286 2.104-9.844 5.522a.801.801 0 0 0 0 .952C4.714 15.896 8.18 18 12 18c3.821 0 7.287-2.104 9.843-5.522a.801.801 0 0 0 0-.952C19.287 8.104 15.821 6 12 6Zm.274 10.225c-2.536.16-4.631-1.944-4.472-4.5.131-2.11 1.83-3.818 3.924-3.95 2.536-.16 4.631 1.944 4.472 4.5-.135 2.105-1.833 3.814-3.924 3.95Zm-.127-1.952a2.269 2.269 0 0 1-2.405-2.421 2.282 2.282 0 0 1 2.115-2.13 2.269 2.269 0 0 1 2.405 2.422c-.073 1.14-.99 2.06-2.115 2.13Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={2}
        x2={12.588}
        y1={18}
        y2={0.353}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={firstColorFill} />
        <Stop offset={1} stopColor={secondColorFill} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IconVisibleOff;
