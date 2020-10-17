import { useState, useEffect } from "react";
import yelp from '../api/yelp';

export default () => {
  const [places, setPlaces] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchRun = async (searchTerm) => {
    try {
      console.log('make request:', searchTerm);
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'prague',
        }
      });
      if (response.data.businesses.length > 0) {
        // console.log('demo:', response.data.businesses[0]);
      }
      setPlaces(response.data.businesses);
      // setTerm('');
    } catch (err) {
      console.log('err!', err);
      setErrorMessage('Something went wrong!');
    }
  }

  useEffect(() => {
    searchRun('beer');
  }, []);

  return [searchRun, places, errorMessage];
};
