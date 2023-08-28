import './App.css';
import video from "./video/ЭВМ СРС очистка пк.mp4"
import React, { useRef, useState } from 'react';

function App() {
  const videoRef = useRef()
  const [data, setData] = useState(true)
  const playClick = () => {
    videoRef.current.play()
    setData(false)
  }
  const pauseClick = () => {
    videoRef.current.pause()
    setData(true)
  }
  const btnVideo = data ? <i onClick={playClick} class="fa-solid fa-circle-play fa-5x">  </i> : <i onClick={pauseClick}  class="fa-solid fa-circle-pause fa-5x">  </i>
  return (
    <div className="container">
      <h1>Hello</h1>
      <div className="video">
        <video poster='https://gamerwall.pro/uploads/posts/2022-03/1647895652_3-gamerwall-pro-p-yegipet-fon-krasivie-4.jpg' controls={data?null:"controls"} ref={videoRef} preload='auto'>
        
          <source src={video} type='video/webm' />
        </video>
        <div>
          {btnVideo}
        </div>
      </div>
    </div>
  );
}

export default App;
// import './App.css';
// import video from "./video/ЭВМ СРС очистка пк.mp4"
// import React, { useRef, useState } from 'react';

// function App() {
//   const videoRef = useRef()
//   const [data, setData] = useState(true)
//   const playClick = () => {
//     videoRef.current.play()
//     setData(false)
//   }
//   const pauseClick = () => {
//     videoRef.current.pause()
//     setData(true)
//   }
//   const btnVideo = data ? (
//     <i onClick={playClick} className="fa-solid fa-circle-play fa-5x"></i>
//   ) : (
//     <i onClick={pauseClick} className="fa-solid fa-circle-pause fa-5x"></i>
//   );
//   const videoControls = data ? (
//     <div>
//       {btnVideo}
//     </div>
//   ) : null;
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <div className="video">
//         <video poster='https://gamerwall.pro/uploads/posts/2022-03/1647895652_3-gamerwall-pro-p-yegipet-fon-krasivie-4.jpg' controls ref={videoRef} preload='auto'>
//           <source src={video} type='video/webm' />
//         </video>
//         {videoControls}
//       </div>
//     </div>
//   );
// }

// export default App;
