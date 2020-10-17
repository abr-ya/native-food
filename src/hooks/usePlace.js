import { useState, useEffect } from "react";
import yelp from '../api/yelp';

export default (id) => {
  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const getPlace = async (placeId) => {
    try {
      console.log('get place data:', placeId);
      const response = await yelp.get(`/${id}`, {params: {}});
      //console.log(response.data.alias);
      setPlace(response.data);
      setLoading(false);
    } catch (err) {
      console.log('usePlace err!', err);
      setErrorMessage('Something went wrong (usePlace)!');
    } 
  }

  useEffect(() => {
    getPlace(id);
  }, []);
  
  return [place, loading, errorMessage];
};
