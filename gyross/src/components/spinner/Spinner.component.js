import React from "react";

import {
  SmallSpinnerContainer,
  SpinnerContainer,
  SpinnerOverlay,
} from "./Spinner.style";

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export const SmallSpinner = () => (
  <SpinnerOverlay>
    <SmallSpinnerContainer />
  </SpinnerOverlay>
);

export const WithSpinner = (WrapppedComponent) => ({ isLoading, ...props }) => {
  return isLoading ? <Spinner /> : <WrapppedComponent {...props} />;
};

export default Spinner;
