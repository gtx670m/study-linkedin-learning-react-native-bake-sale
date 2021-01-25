import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../utils';
import ajax from '../ajax';
import { isEmpty } from 'lodash';

const DealDetail = (props) => {
  DealDetail.propTypes = {
    deal: PropTypes.object,
    setCurrentDealId: PropTypes.func,
  };

  const [detail, setDetail] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const {
    deal: { key = '' } = {},
    setCurrentDealId
  } = props;
  const {
    title = '',
    price = 0,
    media = [],
    cause: { name = '' } = {},
    user = {},
    description = '',
  } = detail;
  const { avatar = '', name: userName = '' } = user;

  useEffect(() => {
    async function fetchData() {
      return await ajax.fetchDealDetail(key);
    }
    fetchData().then((data) => setDetail(data));
  }, []);

  const onBack = () => setCurrentDealId(null);

  return (
    <View style={styles.list}>
      <TouchableOpacity>
        <Text
          style={styles.backBtn}
          onPress={onBack}
        >Back</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: media[imageIndex] }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitle}>
          <View style={styles.priceArea}>
            <Text style={styles.price}>{priceDisplay(price)}</Text>
            <Text>{name}</Text>
          </View>
          {!isEmpty(user) && (
            <View style={styles.user}>
              <Image style={styles.avatar} source={{ uri: avatar }} />
              <Text>{userName}</Text>
            </View>
          )}
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    marginHorizontal: 10,
    marginVertical: 10,
    height: '100%',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
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
    padding: 6,
    fontWeight: 'bold',
    backgroundColor: 'wheat',
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  priceArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  user: {
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 2,
  },
  description: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#eee',
    padding: 10,
    margin: 10,
  },
  backBtn: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  }
});

export default DealDetail;
