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
  useEffect(() => {
    dispatch(fetchItem());
  }, []);
  useEffect(() => {
    console.log(items, "items");
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
      text: "Category Bar Chart",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line",
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
    <>
      <CanvasJSChart options={options} />
    </>
  );
}
