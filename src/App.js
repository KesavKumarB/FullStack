import "./App.css";
import Card from "./Card";
// eslint-disable-next-line
import CardHead from "./charts/CardHead";
// eslint-disable-next-line
import ChartHead from "./charts/ChartHead";
import Charts from "./charts/Charts";

function App() {
  return (
    <>
      <div className="text-center">
        <div>
        <Card />
        <Charts />
        </div>
      </div>
    </>
  );
}

export default App;
