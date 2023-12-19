// toaster
import { Toaster } from "react-hot-toast";
// page
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <HomePage />
    </>
  );
}

export default App;
