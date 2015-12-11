var React = require('react');
var ReactDOM = require('react-dom');
var Coverflow = require('react-coverflow');
ReactDOM.render(
  <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={false}
    >
    <img src='1.jpg' alt='title or description' url="http://andyyou.github.io/react-coverflow/" />
    <img src='2.jpg' alt='title or description' url="http://andyyou.github.io/react-coverflow/"/>
    <img src='3.jpg' alt='title or description' url="http://andyyou.github.io/react-coverflow/"/>
  </Coverflow>,

  document.querySelector('.content')
);
