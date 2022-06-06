import { stylesheet } from "typestyle";

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
  },
  button: {
    width: 40,
    height: 40,
  }
});