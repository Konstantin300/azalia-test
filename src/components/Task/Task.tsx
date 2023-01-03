import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import { Checkbox } from '../../assets/svg';
import Swipeable from 'react-native-gesture-handler/Swipeable';

type Props = {
  title: string;
  isDone: boolean;
  onPress: () => void;
};

const Task: FC<Props> = ({ title, isDone, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, styles.elevation]}>
      <Checkbox color={isDone ? '#222F3E' : '#fff'} />
      <Text style={isDone ? styles.taskDone : styles.taskTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Task;
