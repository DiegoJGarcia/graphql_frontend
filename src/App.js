import './App.css';

import apolloCli from './lib/apollo';
import { gql } from 'apollo-boost';

const App = () => {
  apolloCli
    .query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `,
    })
    .then(result => console.log('result', result));
};

export default App;
