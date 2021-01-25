const apiHost = 'https://bakesaleforgood.com';

export default {
  async fetchDeals(searchTerm = '') {
    try {
      const response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealDetail(dealId) {
    try {
      const response = await fetch(apiHost + '/api/deals/' + dealId);
      console.log('response', response);
      const json = await response.json();
      console.log('json', json);
      return json;
    } catch (error) {
      console.error(error);
    }
  }
};