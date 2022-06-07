import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountries, RootStore, Status } from './redux/store';
import { CountryColumn } from './components/CountryColumn';
import { NewCountry } from './components/NewCountry';
import { Loader } from './components/Loader';
import { formatNumber } from './helpers/formatNumber';
import { extremumCountries, totalPopulation } from './redux/selectors';

import { styles } from './app.styles';
import { AnyAction } from 'redux';

const LAST_LETTER = 'N';

function App() {
  const dispatch = useDispatch();
  const [allCountriesLoaded, setAllCountriesLoaded] = useState(false);

  const { allCountries, status, custom } = useSelector((state: RootStore) => state.country);
  const { biggest, smallest } = useSelector(extremumCountries);
  const total = useSelector(totalPopulation);

  useEffect(() => {
    dispatch(getCountries(LAST_LETTER) as {} as AnyAction);
  }, [dispatch]);

  const getMoreHandler = () => {
    dispatch(getCountries() as {} as AnyAction);
    setAllCountriesLoaded(true);
  }

  return (
    <div>
      {status === Status.loading && <Loader />}
      {allCountries && (
        <>
        <div className={`${styles.header} ${styles.row}`}>
          <span>Total population: {formatNumber(total)}</span>
          <button className={styles.button} onClick={getMoreHandler} disabled={allCountriesLoaded}>Get more countries</button>
        </div>
          <div className={styles.content}>
            <CountryColumn data={biggest} title="The 10 biggest countries"/>
            <CountryColumn data={smallest} title="The 10 smallest countries"/>
            <CountryColumn data={custom} title="Your own countries" open>
              <NewCountry />
            </CountryColumn>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
