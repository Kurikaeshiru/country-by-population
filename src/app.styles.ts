import { stylesheet } from 'typestyle'

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
    background: 'rgba(0,0,0,0.04)',
    borderRadius: 20,
    height: 'fit-content',
  },
  input: {
    height: 38,
    padding: '0 8px',
    borderBottom: '1px solid #aaa',
    fontSize: '16px'
  },
  header: {
    padding: '16px 20px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})