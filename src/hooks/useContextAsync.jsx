import React, { useState, useEffect } from 'react'

export default (fetchPromise, initContext={}) => {
  const [context, setContext] = useState(initContext);
  const [done, setDone] = useState(false);
  const fetchPromiseData = async () => {
    const data = await fetchPromise;
    setContext({...initContext, ...data});
    setDone(true);
  }
  useEffect(() => {
    if (!done) {
      fetchPromiseData();
    }
    console.log('fetchPromiseData');
  });

  return React.createContext(context)
}