import React from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../../../components/Container/Container';
import { useViewModel } from '../ViewModel/Home';
import { DesignSystem } from '../../../util/Style/DesignSystem';
export default function Home() {
  const {

  } = useViewModel();


  return (
    <Container>
      <View></View>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonFloat: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: DesignSystem.colors.primary,
    paddingBottom: 40,
    borderRadius: 10,
  },
  containerCard: {
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  containerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#FFF',
    paddingTop: 5,
    marginTop: 10,
  },
  actions: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
});
