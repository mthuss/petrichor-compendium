import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import { useCallback } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { UserProvider } from './components/User/UserContext';


export default function App() {

  return (
    <UserProvider>
      <MenuProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Navigation></Navigation>
          </NavigationContainer>
        </SafeAreaView>
      </MenuProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
