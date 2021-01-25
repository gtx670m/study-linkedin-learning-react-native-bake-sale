import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';

const DealList = (props) => {
  DealList.propTypes = {
    deals: PropTypes.array,
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
  };

  const [currentDealId, setCurrentDealId] = useState(undefined);
  const { deals = [], setSearchText, searchText = '' } = props;
  const currentDeal = deals.find((item) => item.key === currentDealId);

  const renderList = () => (
    <View>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <FlatList
        data={deals}
        renderItem={({ item }) => (
          <DealItem deal={item} setCurrentDealId={setCurrentDealId} />
        )}
      />
    </View>
  );

  const renderDetail = () => (
    <DealDetail deal={currentDeal} setCurrentDealId={setCurrentDealId} />
  );

  return (
    <View style={styles.list}>
      {currentDealId ? renderDetail() : renderList()}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
  },
});

export default DealList;
