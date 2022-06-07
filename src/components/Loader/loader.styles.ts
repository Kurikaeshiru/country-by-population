import { stylesheet } from 'typestyle';

export const styles = stylesheet({
  loader: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100vw',
    height: '100vh',
    '$nest': {
      svg: {
        position: 'absolute',
        width: '192px',
        top: 'calc(50% - 192px / 2)',
        left: 'calc(50% - 192px / 2)',
        zIndex: 2,
      }
    },
  },
});
