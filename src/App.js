import React from 'react';
import ReactPlayer from 'react-player';
function App() {

  const vidUrl = "https://www.facebook.com/facebook/videos/10153231379946729"
  return (
    <>
    <div className="App">
      <div className="container">
        <div style={{textAlign:"center"}}>
        <h1>My React Player</h1>

        </div>
      </div>
      <div className="container">
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <ReactPlayer
          url={vidUrl}
          playing={false}
          volume={0.5}
        />

        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;