/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AddButton from './src/assets/svg/AddButton';
import AddTaskModal from './src/components/AddTaskModal';
import Task from './src/components/Task';
import { TaskType } from './src/types/taskType';
import styles from './styles';

const App = () => {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onAddTask = (taskTitle: string) => {
    setTaskList([
      ...taskList,
      { id: Math.random(), title: taskTitle, isDone: false },
    ]);
  };

  const onCompleteTask = (taskId: number) => {
    const updatedTaskList = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const onDeleteTask = (taskId: number) => {
    const updatedTaskList = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <GestureHandlerRootView style={{ height: '100%' }}>
      <SafeAreaView style={styles.container}>
        {taskList.map(task => (
          <Swipeable
            key={task.id}
            renderLeftActions={() => <Text> </Text>}
            renderRightActions={() => <Text> </Text>}
            onSwipeableWillOpen={() => onDeleteTask(task.id)}>
            <Task
              onPress={() => onCompleteTask(task.id)}
              title={task.title}
              isDone={task.isDone}
            />
          </Swipeable>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsModalVisible(true)}>
          <AddButton />
        </TouchableOpacity>
        <AddTaskModal
          onAddTask={onAddTask}
          setIsModalVisible={setIsModalVisible}
          visible={isModalVisible}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
