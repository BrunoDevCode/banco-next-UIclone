import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import styles from './style';

import unsplashSource from '../../assets/unsplashImage.png';

export default function LoginScreen() {
  const [stateOfEye, setStateOfEye] = useState('eye-slash');
  const [passVisibility, setPassVisibility] = useState(true);

  function handleExitApp() {
    BackHandler.exitApp();
  }

  function handleChangePassVisibility() {
    stateOfEye === 'eye-slash' ? setStateOfEye('eye') : setStateOfEye('eye-slash');
    passVisibility === true ? setPassVisibility(false) : setPassVisibility(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleExitApp}>
          <AntDesign style={[styles.headerLogOut, { transform: [{ rotateZ: "180deg" }] }]} name='logout' size={24} color='black' />
        </TouchableOpacity>
        <Text style={styles.headerText}>Next</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={unsplashSource} />
        </View>

        <View style={styles.describe}>
          <Text style={styles.detailsText}>Larissa Rosa</Text>
          <Text style={styles.detailsAgencyText}>157881-3</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Senha :' style={styles.passInput} secureTextEntry={passVisibility} />

        <TouchableOpacity style={styles.passEyeContainer} onPress={handleChangePassVisibility}>
          <FontAwesome name={stateOfEye} size={24} color='black' style={styles.passEye} />
        </TouchableOpacity>
      </View>

      <View style={styles.forgotPassContainer}>
        <FontAwesome style={styles.forgotPassArrow} name='angle-right' size={22} color='black' />
        <Text style={styles.forgotPassText}>Esqueceu a senha</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.loginButtonContainer}>
          <Text style={styles.loginButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.shortcutsContainer}>
        <View style={styles.shortcut}>
          <FontAwesome style={styles.shortcutSvg} name='flag' size={24} color='black' />
          <Text style={styles.shortcutsText}>Atalhos</Text>
        </View>

        <View style={styles.shortcut}>
          <FontAwesome style={styles.shortcutSvg} name='key' size={24} color='black' />
          <Text style={styles.shortcutsText}>Token</Text>
        </View>

        <View style={styles.shortcut}>
          <FontAwesome style={styles.shortcutSvg} name='leanpub' size={24} color='black' />
          <Text style={styles.shortcutsText}>Pix</Text>
        </View>
      </View>
    </View>
  );
}