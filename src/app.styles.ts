import { stylesheet } from 'typestyle';

export const colors = {
  acentColor: '#7ed1ea',
  acentColorLight: '#c4e5ef',
  acentColorHover: '#64b1c8',
  grey: '#ddd',
  lightGrey: 'rgba(0,0,0,0.04)',
  white: '#fff',
};

export const styles = stylesheet({
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '8px',
    padding: 8,
    gridAutoRows: 'minmax(min-content, max-content)',
  },
  col: {
    display: 'flex',
    padding: '16px 20px',
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    height: 'fit-content',
  },
  header: {
    padding: '16px 20px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: '8px',
    backgroundColor: colors.acentColor,
    color: colors.white,
    border: 'none',
    borderRadius: '8px',
    height: '38px',
    fontSize: '16px',
    '$nest': {
      '&:hover': {
        backgroundColor: colors.acentColorHover,
      },
      '&:disabled': {
        backgroundColor: colors.acentColorLight,
      },
    },
  }
});
