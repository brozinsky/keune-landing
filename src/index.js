import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './contexts/ThemeContext';
import { CurrentSlideProvider } from './contexts/CurrentSlideContext';
import { SliderDataProvider } from './contexts/SliderDataContext';

ReactDOM.render(
  <React.StrictMode>
    <SliderDataProvider>
      <CurrentSlideProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CurrentSlideProvider>
    </SliderDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
