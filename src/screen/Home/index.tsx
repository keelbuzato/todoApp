import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './style';
import logo from '../../../assets/Logo.png';
import buttonAdd from '../../../assets/Layer.png';
import Clipboard from '../../../assets/Clipboard.png';
import { Task, Tasks } from '../../components/Tasks';
import React from 'react';
import { useState } from 'react';

export function Home() {
  const [descriptionTasks, setDescriptionTasks] = useState('');
  const [listTasks, setListTasks] = useState<Task[]>([]);

  function handleAddTasks() {
    if (descriptionTasks == '') return;
    const newTask = {
      id: listTasks.length++,
      text: descriptionTasks,
      done: false,
    };
    setListTasks((item) => [...item, newTask].filter(Boolean));
    setDescriptionTasks('');
  }

  function handleRemoveTasks(deleteId: number) {
    setListTasks((item) => item.filter(({ id }) => id !== deleteId));
  }
  function handleTasksChange(id) {
    const newsTasks = [...listTasks];
    setListTasks(
      newsTasks.map((item) => {
        if (item.id == id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    );
  }

  return (
    <SafeAreaView style={styles.areaSafe}>
      <View style={styles.imgContainer}>
        <Image source={logo} style={styles.imgLogo} />
      </View>
      <View style={styles.container}>
        <View style={styles.containerInputButton}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'#808080'}
            value={descriptionTasks}
            onChangeText={setDescriptionTasks}
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTasks}>
            <Image source={buttonAdd} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerTasks}>
          <View style={styles.containesInfo}>
            <View style={styles.containerCreated}>
              <Text style={styles.infoCreatedTasks}>Criadas</Text>
              <View style={styles.counter}>
                <Text style={styles.textCounter}>{listTasks.length}</Text>
              </View>
            </View>
            <View style={styles.containerCreated}>
              <Text style={styles.infoDoneTasks}>Concluídas</Text>
              <View style={styles.counter}>
                <Text style={styles.textCounter}>
                  {listTasks.filter((item) => item.done).length}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.rowInfo} />
          <FlatList
            data={listTasks}
            keyExtractor={(item) => String(item?.id)}
            renderItem={({ item }) => {
              return (
                <Tasks
                  key={item.id}
                  task={item}
                  onRemove={() => handleRemoveTasks(item.id)}
                  onDone={() => handleTasksChange(item.id)}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.containerNoHaveTasks}>
                <Image source={Clipboard} style={styles.imgClipBoard} />
                <Text style={styles.textNoHaveTasks}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.textNoHaveTaskss}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
