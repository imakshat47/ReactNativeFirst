import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalEventHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.justify_center}>
        <TextInput
          placeholder="Course Goal"
          style={styles.text_input}
          onChangeText={goalEventHandler}
          value={enteredGoal}
        />

        <View style={styles.btn_grp}>
          {/* Or cah have goan for ()=>props.onAddGoal{enteredGoal} to pass parms to App.js */}
          <View style={styles.btn}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>

          {/* To close modal */}
          <View style={styles.btn}>
            <Button title="Close" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  justify_center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_input: {
    width: "80%",
    padding: 10,
    borderColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btn_grp: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  btn: {
    width: "40%",
  },
});

export default GoalInput;
