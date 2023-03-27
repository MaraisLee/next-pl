import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/developer.json";

const DevAni = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 500, height: 300 }}
    />
  );
};

export default DevAni;
