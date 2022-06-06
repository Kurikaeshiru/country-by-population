import Collapsible from 'react-collapsible';

import { formatNumber } from '../../helpers/formatNumber';
import { getSummPopulation } from '../../helpers/getCountries';
import { Country } from '../../types';
import './styles.css';

const CountryRow = ({ title, number }: { title: string, number: number }) => (
  <div className="row country">
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
    <div className="col">
      <Collapsible
        trigger={title}
        open={open}
      >
        {data.map((country) => (
          <CountryRow key={country.country} title={country.country} number={country.population} />
        ))}
        {children}
        <div className="total">
          <CountryRow title="Total" number={total} />
        </div>
      </Collapsible>
    </div>
  );
};
