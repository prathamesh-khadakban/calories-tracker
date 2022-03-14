import Foods from "./Components/Foods";
import Color from "./Components/Color";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Color></Color> */}
        <Foods></Foods>
      </Layout>
    </div>
  );
}

export default App;
