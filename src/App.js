import Analysis from "./components/Analysis"
import Navigation from "./components/Navigations";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import Visitors from "./components/Visitors";
import "./App.css";

const App = () => {
 return (
   <div id="background">

      <div id = "nav">
      <Navigation/>
      </div>

      <div id = "right">

        <div id = "three">
            <div id = "reviews">
              <Reviews/>
            </div>
            <div id = "rating">
              <Rating/>
            </div>
            <div id = "analysis">
              <Analysis/>
            </div>
        </div>

        <div id = "visitors">
        <Visitors/>
        <div id = "graydiv"></div>
        </div>

      </div>

   </div>
 );
}

export default App;