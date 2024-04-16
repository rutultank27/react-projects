import { useState } from 'react';

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 7,
    duration: 12,
  });

  const userInputChangeHandler = (inputIdentifier,updatedValue) => {
    setUserInput (
      (prevUserInputs) => {
        return({
          ...prevUserInputs,
          [inputIdentifier]: +updatedValue
        });
      }
    )
  }

  return (
    <>
    <Header />
    <UserInput inputData={userInput} onChange={userInputChangeHandler} />
    <Results resultData={userInput}/>
    </>
  );
}

export default App;
