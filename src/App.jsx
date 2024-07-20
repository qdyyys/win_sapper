import Sapper from "./components/Sapper";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
    }
  }, []);
  return (
    <>
      <Sapper />
    </>
  );
}

export default App;
