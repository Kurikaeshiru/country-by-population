import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';

import { store } from './redux/store';
test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
});
