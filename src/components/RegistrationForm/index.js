import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#000",
    borderWidth: 1,
    height: 100,
    width: 100,
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
  input: {
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    margin: 5,
  },
  label: {
    marginLeft: 5,
    marginTop: 10,
  }
});

const RegistrationForm = ({ onRegistration })  => {
  const [player, setPlayer] = useState({
    avatar: '',
    name: '',
    emailAddress: '',
    password: ''
  });

  return (
    <React.Fragment>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} />
        <TouchableOpacity style={styles.button}>
          <Text>Upload Avatar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="words"
        autoCompleteType="name"
        autoCorrect={false}
        autoFocus={true}
        onChangeText={(name) => setPlayer({ ...player, name })}
        placeholder="Johnny Appleseed"
        textContentType="name"
      />
      <Text style={styles.label}>Email address:</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCompleteType="email"
        onChangeText={(emailAddress) => setPlayer({ ...player, emailAddress })}
        placeholder="johnny@apple.com"
        textContentType="emailAddress"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCompleteType="password"
        onChangeText={(password) => setPlayer({ ...player, password })}
        placeholder="open sesame"
        secureTextEntry={true}
        textContentType="newPassword"
      />
      <TouchableOpacity style={styles.button} onPress={() => onRegistration(player)}>
        <Text>Register</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default RegistrationForm;
