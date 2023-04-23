"use client"

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
                "Dow Jones",
                "DJI|All"
            ],
            [
                "S&P500",
                "SP500|All"
            ],
            [
                "Gold",
                "GOLD|All"
            ],
            [
                "Bitcoin",
                "BTCUSD|All"
            ],
            [
                "Brazil",
                "EWZ|All"
            ],
            [
              "Apple",
              "AAPL|All"
            ],
            [
                "Microsoft",
                "MSFT|All"
              ],
              [
                "Google",
                "GOOGL|All"
              ],
              [
                "Meta",
                "META|All"
              ]
          ],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "en",
          "colorTheme": "",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0
        }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={contariner}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/AAPL/" rel="noopener noreferrer" target="_blank"><span className="blue-text">AAPL stock price</span></a> by TradingView</div>
    </div>
  );
}

export default memo(TradingViewWidget);

