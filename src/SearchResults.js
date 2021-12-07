import React, { Component } from "react";
class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globalArray: this.props.globalArray
    };
  }

  stockFilter(searchTerm) {
    return function (stockObject) {
      let stockname = stockObject.stock.name;

      return stockname.includes(searchTerm); // end of return statement
    }; // end of return function
  } // end of addressFilterFunction

  render() {
    const arrayPassedAsParameter = this.props.globalArray;
    const searchTermFromProps = this.props.searchTerm;

    return (
      <div className="SearchResults">
        {arrayPassedAsParameter
          .filter(this.stockFilter(searchTermFromProps))
          .map((s, key) => (
            <li className="li" key={key}>
              <div className="buttons" onMouseOver={this.boxMouseOverHandler}>
                <b>{s.stock.symbol}</b>

                <div style={{ alignItems: "center", width: "80%" }}>
                  <p>{s.stock.name}</p>

                  <p>{s.stock.sector}</p>
                </div>

                <div className="price">
                  <p style={{ margin: "3px" }}>${s.rates.buy}</p>
                  <button
                    className="buybtn"
                    onClick={() => this.props.buyStock(key)}
                  >
                    BUY
                  </button>
                </div>
                <div className="price">
                  <p style={{ margin: "3px" }}>{s.rates.sell}</p>
                  <button
                    style={{ background: "none", color: "white" }}
                    className="sellbtn"
                    onClick={() => this.props.sellStock(key)}
                  >
                    SELL
                  </button>
                </div>
              </div>
            </li>
          ))}
      </div>
    ); // end of return statement
  } // end of render function
} // close the SearchResults component

export default SearchResults;
