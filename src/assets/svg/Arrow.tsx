import Svg, { Path } from 'react-native-svg';
import React from 'react';

const Arrow = () => {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Path
        d="M21.74 10.5H5.203l7.595-8.385L10.869 0 0 12l10.87 12 1.915-2.115L5.204 13.5h16.535v-3z"
        fill="#222F3E"
      />
    </Svg>
  );
};

export default Arrow;
