import { stylesheet } from "typestyle";

export const styles = stylesheet({
  country: {
    padding: '10px 8px',
    borderRadius: '8px',
    '$nest': {
      '&:hover': {
        backgroundColor: '#c4e5ef',
      }
    }
  },
  total: {
    marginTop: 8,
    paddingTop: 8,
    borderTop: '1px solid #eee',
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
    borderBottom: '1px solid rgba(87, 64, 246, 0.4)',
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
        borderBottom: '1px solid rgb(87 64 246)'
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
})