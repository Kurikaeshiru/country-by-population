import { CollapsiblePanel } from '../CollapsiblePanel';
import { formatNumber } from '../../helpers/formatNumber';
import { CountryCategory } from '../../types';
import './styles.css';

const CountryRow = ({ title, number }: { title: string, number: number }) => (
  <div className="row country">
    <span>{title}</span>
    <span>{formatNumber(number)}</span>
  </div>
);

interface CountryColumnProps {
  data: CountryCategory
  title: string
}

export const CountryColumn = ({ data, title }: CountryColumnProps) => (
  <div className="col">
    <CollapsiblePanel title={title}>
      {data.countries.map((country) => (
        <CountryRow key={country.country} title={country.country} number={country.population} />
      ))}
      <div className="total">
        <CountryRow title="Total" number={data.total} />
      </div>
    </CollapsiblePanel>
  </div>
);
