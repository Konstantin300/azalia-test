import { View, TextInput } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

type Props = {
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

const Input: FC<Props> = ({ placeholder, onChange, value }) => {
  return (
    <View>
      <TextInput
        defaultValue={value}
        onChangeText={text => onChange(text)}
        style={[styles.input, styles.elevation]}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
