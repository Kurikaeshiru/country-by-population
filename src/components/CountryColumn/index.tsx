import Collapsible from 'react-collapsible';

import { formatNumber } from '../../helpers/formatNumber';
import { getSummPopulation } from '../../helpers/getCountries';
import { Country } from '../../types';
import { styles } from './countryColumn.styles';
import { styles as appStyles } from '../../app.styles';

const CountryRow = ({ title, number }: { title: string, number: number }) => (
  <div className={`${styles.country} ${appStyles.row}`}>
    <span>{title}</span>
    <span>{formatNumber(number)}</span>
  </div>
);
interface CountryColumnProps {
  data: Country[]
  title: string
  children?: React.ReactNode
  open?: boolean
}

export const CountryColumn = ({ data, title, children, open = false }: CountryColumnProps) => {
  const total = getSummPopulation(data);

  return (
    <div className={appStyles.col}>
      <Collapsible
        trigger={title}
        open={open}
        className={styles.collapsible}
        openedClassName={styles.collapsible}
        triggerClassName={styles.collapsibleTrigger}
        triggerOpenedClassName={`${styles.collapsibleTrigger} ${styles.isOpen}`}
      >
        {children}

        {data.map((country) => (
          <CountryRow key={country.country} title={country.country} number={country.population} />
        ))}
        <div className={styles.total}>
          <CountryRow title="Total" number={total} />
        </div>
      </Collapsible>
    </div>
  );
};
