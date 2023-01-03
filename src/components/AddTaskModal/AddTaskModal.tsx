import { Text, Modal, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import { Arrow } from '../../assets/svg';
import styles from './styles';
import Input from '../Input';
import Button from '../Button';

type Props = {
  visible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onAddTask: (arg0: string) => void;
};

const AddTaskModal: FC<Props> = ({ visible, setIsModalVisible, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.headerText}>Вернуться назад</Text>
        </View>
        <Input
          onChange={setTaskTitle}
          placeholder="Текст новой задачи"
          value={taskTitle}
        />
        <Button
          disabled={taskTitle === ''}
          customStyles={taskTitle === '' && styles.disabledButton}
          title="Добавить"
          onPress={() => {
            onAddTask(taskTitle);
            setTaskTitle('');
          }}
        />
      </View>
    </Modal>
  );
};

export default AddTaskModal;
