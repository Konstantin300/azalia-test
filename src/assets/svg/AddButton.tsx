import Svg, { Path } from 'react-native-svg';

import React from 'react';

const AddButton = () => {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <Path
        d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28zm-2-38a2 2 0 014 0v8h8a2 2 0 010 4h-8v8a2 2 0 01-4 0v-8h-8a2 2 0 010-4h8v-8z"
        fill="#222F3E"
      />
    </Svg>
  );
};

export default AddButton;
