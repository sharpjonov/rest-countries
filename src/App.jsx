import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
    </>
  );
}

export default App;
