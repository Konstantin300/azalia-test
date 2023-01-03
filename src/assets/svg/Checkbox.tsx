import Svg, { Rect, Path } from 'react-native-svg';
import React, { FC } from 'react';

type Props = {
  isDone: boolean;
};

const Checkbox: FC<Props> = ({ isDone }) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Rect
        x={1}
        y={1}
        width={18}
        height={18}
        rx={3}
        fill={isDone ? '#222F3E' : '#fff'}
        stroke="#222F3E"
        strokeWidth={2}
      />
      <Path
        d="M7.776 12.89L4.959 9.78 4 10.832 7.776 15l8.105-8.949L14.93 5l-7.153 7.89z"
        fill="#FAFAFE"
      />
    </Svg>
  );
};

export default Checkbox;
