import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

if (process.env.NODE_ENV !== "production") {
  const tron = Reactotron.configure().use(reactotronRedux());
  tron.clear(); //limpar a timeline
  console.tron = tron;
}
