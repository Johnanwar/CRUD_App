import "./App.css";
import Home from "./pages/home";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
       <Toaster/>
      <Home />
    </div>
  );
}

export default App;
