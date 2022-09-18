import { View, Image, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from '../../components/Tasks/styles';
import imgTrash from '../../../assets/trash.png';
import { useState } from 'react';
import React from 'react';

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

type TasksProps = {
  task: Task;
  onRemove: () => void;
  onDone: () => void;
};

export function Tasks({ task, onRemove, onDone }: TasksProps) {
  // const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    // setIsChecked(!isChecked);
    onDone();
  }

  return (
    <View style={styles.containerTasks}>
      <View style={styles.areaToCheack}>
        <BouncyCheckbox
          size={24}
          fillColor={task.done ? '#5E60CE' : '#4EA8DE'}
          unfillColor="transparent"
          text={task.text}
          textStyle={styles.tasksText}
          onPress={handleCheck}
        />
      </View>
      <View style={styles.containeTrash}>
        <TouchableOpacity onPress={onRemove}>
          <Image source={imgTrash} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
