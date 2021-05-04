import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <MyNavBar title="Strivestaurant" />
      <Home newTitle="MyStaurant" newPayOff="I am not sure what this means" />
      {/* <Footer/> */}
    </div>
  );
};

export default App;
