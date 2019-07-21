import React from 'react';
import Context from './context';
import Header from './containers/Header';
import Menu from './components/Menu';
import './App.css';

function App() {
  
  let [tooltipData, setTooltipData] = React.useState({
    visible: false,
    x: 0,
    y: 0
  });

  function mouseOverPhotoItemhandler(e) {
    let tooltipData = { visible: true, x: e.pageX, y: e.pageY}

    setTooltipData(
      tooltipData
    );
    setTimeout(() => {
      tooltipData.visible = false;
      setTooltipData(tooltipData);
    }, 3000);
  }
  
  return (
    <Context.Provider value={{ mouseOverPhotoItemhandler, tooltipData }}>
      <div className='App'>
        <Header />
        <Menu />
      </div>
    </Context.Provider>
  );
}

export default App;
