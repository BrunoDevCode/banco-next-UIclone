import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

import unsplashSource from '../../assets/unsplashImage.png';

import PathPagesButton from '../../components/PathPagesButton';

export default function Launchpage() {
  const balance = 100000;
  const [stateOfEye, setStateOfEye] = useState('eye-slash');

  const { navigate } = useNavigation();

  function handleChangeBalanceVisibility() {
    stateOfEye === 'eye-slash' ? setStateOfEye('eye') : setStateOfEye('eye-slash');
    // passVisibility === true ? setPassVisibility(false) : setPassVisibility(true);
  }

  const pathPagesData = [
    { id: 1, name: 'dollar-sign', text: 'Saldo e Extrato', path: 'Statement' },
    { id: 2, name: 'activity', text: 'Transferencia', path: 'Trasfer' },
    { id: 3, name: 'credit-card', text: 'Cartão', path: 'Card' },
    { id: 4, name: 'heart', text: 'Objetivos', path: 'Goals' },
    { id: 5, name: 'pie-chart', text: 'Investimentos', path: 'Investments' },
    { id: 6, name: 'archive', text: 'Comprovantes', path: 'Proof' }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name='bell' size={24} color='black' />
        </TouchableOpacity>

        <Text style={styles.title}>Next</Text>

        <TouchableOpacity>
          <Text style={styles.help}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={unsplashSource} />
          </View>

          <Text style={styles.profileName}>Larissa Rosa</Text>
        </View>

        <TouchableOpacity onPress={() => navigate('Profile')}>
          <FontAwesome name='angle-right' size={32} color='black' />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Saldo Conta-Corrente</Text>

        <View style={styles.balance}>
          <Text style={styles.balanceValue}>
            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(balance)}
          </Text>

          <TouchableOpacity onPress={handleChangeBalanceVisibility}>
            <FontAwesome name={stateOfEye} size={24} color='black' />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.pathPagesContainer}
        data={pathPagesData}
        keyExtractor={pathPagesData => String(pathPagesData.id)}
        renderItem={({ item: pathPages }) => (
          <PathPagesButton name={pathPages.name} text={pathPages.text} path={pathPages.path} />
        )}
        numColumns={2}
      />

    </View>
  );
}