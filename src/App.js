import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();

    // Check if weight and height are valid numbers
    if (isNaN(weight) || isNaN(height)) {
      setMessage("Please enter a valid weight and height");
      return;
    }

    // Check if weight and height are positive
    if (weight <= 0 || height <= 0) {
      setMessage("Please enter a positive weight and height");
      return;
    }

    // ✅ Corrected logic: height is in cm, convert to meters
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmi(bmi.toFixed(1));

    // ✅ Message + extra tip
    if (bmi < 18.5) {
      setMessage('You are Underweight — try to include more nutritious foods 🥗');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('You are Normal — great job maintaining a healthy balance 💪');
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are Overweight — consider regular exercise and a balanced diet 🚶‍♀️');
    } else {
      setMessage('You are Obese — try consulting a doctor or nutritionist for guidance ❤️');
    }
  };

  // Reload
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kgs)</label>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            {/* ✅ Updated label to show height in cm */}
            <label>Height (cms)</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
