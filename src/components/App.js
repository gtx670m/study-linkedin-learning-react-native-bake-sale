import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';
import AnimationText from './AnimationText';

const App = () => {
  const [showAnimationText, setShowAnimationText] = useState(false);
  const [deals, setDeals] = useState([]);
  const [searchText, setSearchText] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      return await ajax.fetchDeals(searchText);
    }
    fetchData().then((data) => setDeals(data));
  }, [searchText]);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => setShowAnimationText(!showAnimationText)}>
        <Text style={styles.button}>Show Animation Text</Text>
      </TouchableOpacity>
      {showAnimationText ? (
        <AnimationText />
      ) : (
        <DealList
          deals={deals}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10
  }
});

export default App;
