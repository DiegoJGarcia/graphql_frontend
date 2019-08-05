import React from 'react';
import './App.css';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const App = () => {
  const ExchangeRates = () => (
    <Query
      query={gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ));
      }}
    </Query>
  );
  return (
    <div className="App">
      <h1>GRAPHQL FRONTEND</h1>
      <ExchangeRates />
    </div>
  );
};

export default App;
