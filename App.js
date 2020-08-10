import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddGoal, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    //default is key but if we use id then
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    //  To close the modal
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalModal = () => {
    setIsAddMode(false);
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput        
        id={itemData.item.id}
        onDelete={removeGoalHandler}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalModal}
        visble={isAddGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id} //by default key but to use id we use keyExtractor
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
