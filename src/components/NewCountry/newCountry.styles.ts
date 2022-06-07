import { stylesheet } from 'typestyle';

import { colors } from '../../app.styles';

export const styles = stylesheet({
  newCountry: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  input: {
    marginRight: 8,
    maxWidth: 'calc(50% - 50px)',
    height: 38,
    padding: '0 8px',
    border: 'none',
    borderBottom: `1px solid ${colors.grey}`,
    backgroundColor: 'transparent',
    fontSize: '16px'
  },
  button: {
    width: 40,
    height: 40,
  }
});
