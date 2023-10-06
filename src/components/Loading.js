import { useState } from 'react';

function useLoading() {

  const [ setIsFetching] = useState(false);

  const startLoading = () => {
    setIsFetching(true);
  };

  const stopLoading = () => {
    setIsFetching(false);
  };

  return { setIsFetching, startLoading, stopLoading };
}

export default useLoading;


