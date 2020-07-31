import React from "react";
import "./Container.scss";

const Body = () => {
  return (
    <div className="body-container">
      <h1 className="title">Gyross</h1>
      <p className="paragraph">
        Rails 6.0 uses webpack as their default javascript compile engine making
        our life easier while integrating all the yarn modules we couldn’t have
        in earlier versions of Rails application. So excited enough, I installed
        Bootstrap 4.x and Toastr for my UI and then I got stuck at font-awesome
        which really didn’t work looking at just one tutorial. Well, but good
        news!
      </p>
    </div>
  );
};

export default Body;
