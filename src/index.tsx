import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import "./assets/styles/css/svgStyles.css";
import './index.scss';
import { myThemes } from './assets/themes/defaultThemes';

const root = ReactDOM.createRoot(document.getElementById("root") as unknown as HTMLElement);

root.render(
  <RecoilRoot>
    <ThemeProvider theme={myThemes}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
