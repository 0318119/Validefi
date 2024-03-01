import * as React from "react";
import "./index.css";
import { widget } from "../../charting_library";
import datafeed from "./datafeed";

function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
export const IntervalTypes = {
  D: 'D',
  W: 'W'
};

export const RangeTypes = {
  YTD: 'ytd',
  ALL: 'all'
};
export class TVChartContainer extends React.PureComponent {
  static defaultProps = {
    symbol: "Pancake",
    interval: "1",
    containerId: "tv_chart_container",
    //datafeedUrl: 'https://demo_feed.tradingview.com',
    libraryPath: "../../charting_library/",
    chartsStorageUrl: "https://saveload.tradingview.com",
    chartsStorageApiVersion: "1.1",
    clientId: "tradingview.com",
    userId: "danmanoloff",
    fullscreen: false,
    autosize: true,
    studiesOverrides: {},
    "theme": "Dark"
  };

  tvWidget = null;

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate = async () => {
    let baseQuery = await localStorage.getItem("@baseQuery");
    let qQuery = await localStorage.getItem("@qQuery");
    let network = await localStorage.getItem("@network");
    let exchange = await localStorage.getItem("@exchange");

    if (baseQuery.length) {
      const widgetOptions = {
          debug: true,
          timeframe: '3M',
        symbol: this.props.symbol,
        // BEWARE: no trailing slash is expected in feed URL
        datafeed: datafeed,
        interval: this.props.interval,
        container_id: this.props.containerId,
        library_path: this.props.libraryPath,
        locale: getLanguageFromURL() || "en",
        disabled_features: ["use_localstorage_for_settings"],
        enabled_features: ["study_templates"],
        charts_storage_url: this.props.chartsStorageUrl,
        charts_storage_api_version: this.props.chartsStorageApiVersion,
        client_id: this.props.clientId,
        user_id: this.props.userId,
        fullscreen: this.props.fullscreen,
        autosize: this.props.autosize,
        studies_overrides: this.props.studiesOverrides,
        overrides: {
            "mainSeriesProperties.showCountdown": true,
            "paneProperties.background": "#131722",
            "paneProperties.vertGridProperties.color": "#363c4e",
            "paneProperties.horzGridProperties.color": "#363c4e",
            "symbolWatermarkProperties.transparency": 90,
            "scalesProperties.textColor": "#AAA",
            "mainSeriesProperties.candleStyle.wickUpColor": "#336854",
            "mainSeriesProperties.candleStyle.wickDownColor": "#7f323f"
        }
      };

      const tvWidget = new widget(widgetOptions);
      this.tvWidget = tvWidget;

      // setInterval(() => {
      tvWidget.onChartReady(() => {
        tvWidget.headerReady().then(() => {
          const button = tvWidget.createButton();
          button.setAttribute("title", "Click to show a notification popup");
          button.classList.add("apply-common-tooltip");
          button.addEventListener("click", () =>
            tvWidget.showNoticeDialog({
              title: "Notification",
              body: "TradingView Charting Library API works correctly",
              callback: () => {
                console.log("Noticed!");
              },
            })
          );

          button.innerHTML = "Check API";
        });
      });
      // }, 1000);
    }
  };

  componentWillUnmount() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  }

  render() {
    console.log("================ >>>>>>", this.props);
    return (
      <div
        ref={this.ref}
        id={this.props.containerId}
        className={"TVChartContainer"}
      />
    );
  }
}
