import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Keyboard -Mouse",
      amount: 250.0,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "LCD TV",
      amount: 30000.0,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Keyboard -Mouse",
      amount: 250.0,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "Desk (Wooden)",
      amount: 5000,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
