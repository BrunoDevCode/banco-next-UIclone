import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation,  } from '@react-navigation/native';

import styles from './styles';

interface PathButtonProps {
  name: string;
  text: string;
  path: string;
}

const PathPagesButton: React.FC<PathButtonProps> = ({ name, text, path }) => {
  const { navigate } = useNavigation();

  function handleChangePage(path: string) {
    navigate(path)
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => handleChangePage(path)}>
      <Feather name={name} size={52} color='black' />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default PathPagesButton;