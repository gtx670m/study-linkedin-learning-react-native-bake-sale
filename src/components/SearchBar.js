import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const SearchBar = props => {
  SearchBar.propTypes = {
    deals: PropTypes.array,
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
  };

  const { searchText = '', setSearchText } = props;

  return (
    <TextInput
      style={styles.searchBar}
      onChangeText={(text) => setSearchText(text)}
      value={searchText}
      placeholder="Search"
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default SearchBar;
