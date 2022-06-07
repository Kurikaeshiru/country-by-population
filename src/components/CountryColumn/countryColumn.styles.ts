import { stylesheet } from 'typestyle';

import { colors } from '../../app.styles';

export const styles = stylesheet({
  country: {
    padding: '10px 8px',
    borderRadius: '8px',
    '$nest': {
      '&:hover': {
        backgroundColor: colors.acentColorLight,
      }
    }
  },
  total: {
    marginTop: 8,
    paddingTop: 8,
    borderTop: `1px solid ${colors.grey}`,
  },
  collapsible: {
    width: '100%',
  },
  collapsibleTrigger: {
    display: 'block',
    fontWeight: 400,
    position: 'relative',
    width: '100%',
    paddingBottom: '10px',
    marginBottom: '10px',
    borderBottom: `1px solid ${colors.grey}`,
    cursor: 'pointer',
    '$nest': {
      '&::after': {
        fontFamily: 'FontAwesome',
        content: '\'🔼\'',
        position: 'absolute',
        right: '10px',
        top: 0,
        display: 'block',
        transition: 'transform 300ms',
      },
      '&:hover': {
        borderBottom: `1px solid ${colors.acentColorLight}`
      }
    }
  },
  isOpen: {
    '$nest': {
      '&::after': {
        transform: 'rotateZ(180deg)',
      }
    }
  }
});
