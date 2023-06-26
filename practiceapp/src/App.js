import Column from "./Column.js"

import nifty from "./nifty.png"
import sensex from "./sensex.png"
import sense from "./SENSE.png"
import reliance from "./reliance.png"
import tata from "./tata.png"
import mrf from "./mrf.png"

const yearLevel = [
  {
    name: "Nifty 50",
    currentIndex : "18200.84",
    percent: "+0.23%",
    logo: nifty,
    id: 1,
    inc: true
  },
  {
    name: "SENSEX",
    currentIndex: "16900.43",
    percent: "-0.34%",
    logo: sensex,
    id: 2,
    inc: false
  },
  {
    name: "SENSEX",
    currentIndex: "18510.43",
    percent: "+0.84%",
    logo: sense,
    id: 3,
    inc: true
  }
]

const index = [
  {
    name: "Reliance Industries Ltd",
    currentIndex: "2482.00",
    percent: "-0.71%",
    logo: reliance,
    id: 1,
    inc: false
  },
  {
    name: "Tata Motors Ltd",
    currentIndex: "2482.00",
    percent: "-0.71%",
    logo: tata,
    id: 2,
    inc: false
  },
  {
    name: "MRF Ltd",
    currentIndex: "2482.00",
    percent: "-0.71%",
    logo: mrf,
    id: 3,
    inc: false
  }
]

function App() {
  return (
    <main className="container">
      <Column items={yearLevel} title="52 Week Levels" />
      <Column items={index} title="Index" />
      <Column items={index} title="Trending Today" />
    </main>
  );
}

export default App;
