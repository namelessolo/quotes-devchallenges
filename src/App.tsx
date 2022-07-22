import RandomQuote from "./pages/RandomQuote";
import AllQuotes from "./pages/AllQuotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteContainer from "./components/QuoteContainer/QuoteContainer";

function App() {
  return (
    <BrowserRouter>
      <QuoteContainer>
        <Routes>
          <Route path="/" element={<RandomQuote />} />
          <Route path=":author/page/:page" element={<AllQuotes />} />
        </Routes>
      </QuoteContainer>
    </BrowserRouter>
  );
}

export default App;
