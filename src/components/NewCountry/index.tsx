import { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';

import { addCountry } from '../../redux/store';
import { styles } from './newCountry.styles';
import { styles as appStyles } from '../../app.styles';

export const NewCountry = () => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState('');

  const addButtonHandler = () => {
    if (countryName && population) {
      dispatch(addCountry({ country: countryName, population: Number(population) }));
      setCountryName('');
      setPopulation('');
    }
  };

  const keyPressHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      addButtonHandler();
    }
  };

  return (
    <div className={styles.newCountry}>
      <input className={styles.input} type="text" placeholder='Country' value={countryName} onChange={(e) => setCountryName(e.target.value)} />
      <input className={styles.input} type="number" placeholder='Population' value={population} onChange={(e) => setPopulation(e.target.value)} onKeyUp={keyPressHandler} />
      <button className={`${appStyles.button} ${styles.button}`} onClick={addButtonHandler} disabled={!(countryName && population)}>
        +
      </button>
    </div>
  );
};
