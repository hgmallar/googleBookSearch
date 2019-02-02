import React from "react";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";

function NoMatch() {
  return (
    <Wrapper>
      <Jumbotron>

        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
              </span>
        </h1>


      </Jumbotron>
    </Wrapper>
  );
}

export default NoMatch;
