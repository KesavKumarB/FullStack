import "./App.css";
import Card from "./Card";
import CardHead from "./charts/CardHead";
import ChartHead from "./charts/ChartHead";
import Charts from "./charts/Charts";

function App() {
  return (
    <>
      <div className="text-center bg-slate-100">
        <CardHead />
        <Card />
        <ChartHead />
        <Charts />
      </div>
    </>
  );
}

export default App;
