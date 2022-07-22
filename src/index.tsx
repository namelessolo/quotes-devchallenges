import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import QuotesProvider from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QuotesProvider>
    <App />
  </QuotesProvider>
);
