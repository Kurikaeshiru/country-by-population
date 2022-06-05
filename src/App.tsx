import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountries, RootStore, Status } from './redux/store';
import { CountryColumn } from './components/CountryColumn';

import './App.css';
import { AnyAction } from 'redux';

function App() {
  const dispatch = useDispatch();

  const { allCountries, status, countriesByCategories } = useSelector((state: RootStore) => {
    return state.country
  });
  const { biggest, smallest } = countriesByCategories;

  useEffect(() => {
    dispatch(getCountries() as {} as AnyAction);
  }, [dispatch])

  return (
    <div className="App">
      {status === Status.loading && 'loading'}
      {allCountries && (
        <div className="content">
          <CountryColumn data={biggest} title="The 10 biggest countries"/>
          <CountryColumn data={smallest} title="The 10 smallest countries"/>
          <div className="col">Add</div>
        </div>
      )}
    </div>
  );
}

export default App;
