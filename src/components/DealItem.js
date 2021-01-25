import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../utils';

const DealItem = (props) => {
  DealItem.propTypes = {
    deal: PropTypes.object,
    setCurrentDealId: PropTypes.func,
  };

  const {
    deal: {
      key = '',
      title = '',
      price = 0,
      media = [],
      cause: { name = '' } = {},
    } = {},
    setCurrentDealId,
  } = props;

  const handlePress = () => {
    if (typeof setCurrentDealId === 'function') {
      setCurrentDealId(key);
    }
  };

  return (
    <TouchableOpacity style={styles.list} onPress={handlePress}>
      <Image style={styles.image} source={{ uri: media[0] }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitle}>
          <Text>{name}</Text>
          <Text>{priceDisplay(price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 10,
    backgroundColor: 'white',
    // shadow box css
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default DealItem;
