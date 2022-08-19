import "./App.css";
import ProductContextProvider from "./context/productContext";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Home />
      </ProductContextProvider>
    </div>
  );
}

export default App;
