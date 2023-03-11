import './App.css';
import Employee from './components/Employee';
import { Provider } from 'react-redux';
import store from './store/Store';
import Books from './components/Books';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Employee />
        <hr />
        <Books />
      </div>
    </Provider>
  );
}

export default App;
