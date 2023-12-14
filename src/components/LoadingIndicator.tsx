import React from "react";
import { Triangle } from 'react-loader-spinner';

const LoadingIndicator = () => {
  return (
    <>
      <Triangle
        height="80"
        width="80"
        color="orange"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </>
  );
};

export default LoadingIndicator;
