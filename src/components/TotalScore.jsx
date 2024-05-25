import React, { Component } from "react";
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    <div>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
};

export default TotalScore;


const ScoreContainer=styled.div`
min-width:200px;
text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`