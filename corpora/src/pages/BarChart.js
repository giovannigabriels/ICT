import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CanvasJSReact from "../lib/canvasjs.react";
import { fetchItem } from "../store/actions/itemAction";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function BarChart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemReducer);
  let [mainMenu, setMainMenu] = useState(0);
  let [beverage, setBeverage] = useState(0);
  let [snack, setSnack] = useState(0);
  let [desert, setDesert] = useState(0);
  let [type, setType] = useState("bar");
  const handlePie = () => {
    setType("pie");
  };
  const handleBar = () => {
    setType("bar");
  };
  const handleLine = () => {
    setType("line");
  };
  useEffect(() => {
    dispatch(fetchItem());
  }, []);
  useEffect(() => {
    let mainM = 0;
    let bev = 0;
    let snk = 0;
    let des = 0;
    items.forEach((el) => {
      if (el.category == "Main Menu") {
        mainM++;
      } else if (el.category == "Beverage") {
        bev++;
      } else if (el.category == "Snack") {
        snk++;
      } else if (el.category == "Desert") {
        des++;
      }
    });
    setMainMenu(mainM);
    setBeverage(bev);
    setDesert(des);
    setSnack(snk);
  }, [items]);

  const options = {
    title: {
      text: "Category Chart",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: type,
        dataPoints: [
          { label: "Main Menu", y: mainMenu },
          { label: "Beverage", y: beverage },
          { label: "Snack", y: snack },
          { label: "Desert", y: desert },
        ],
      },
    ],
  };
  return (
    <div className="m-10">
      <button
        className="btn btn-primary mx-3 my-5 sm:mx-5"
        onClick={handlePie}>
        Pie
      </button>
      <button
        className="btn btn-primary mx-3 my-5 sm:mx-5"
        onClick={handleBar}>
        Bar
      </button>
      <button
        className="btn btn-primary mx-3 my-5 sm:mx-5"
        onClick={handleLine}>
        line
      </button>
      <CanvasJSChart options={options} />
    </div>
  );
}
