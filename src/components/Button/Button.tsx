import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
  customStyles?: any;
  disabled?: boolean;
};

const Button: FC<Props> = ({ title, onPress, customStyles, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, customStyles]}
      onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
