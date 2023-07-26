import React from "react";
import "./styles.css";
import About from "../About Developer/About";
import Share from "../Share/Share"

const TrendingTopics = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <br />
          <h2 style={{ color: "blue" }}>Click a trending topic</h2>
          <div className="text-center">
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                🕸️ Web Development
              </button>
            </div>{" "}
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                📜 Javascript
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                📍 CSS
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                💻 React.js
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                ⌨️ .NET
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                🚙 Swift
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                🍎 iOS Development
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                🈂️ AWS
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                🖱️ Linux
              </button>
            </div>
            <br />
            <div className="zoom">
              <button type="button" class="btn btn-primary">
                🐍 Python
              </button>
              <br />
            </div>
          </div>
        </div>
        <div class="col-4">
          <br />
          <About />
        </div>
        <div class="col-4">
          <br />
          <Share />
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
