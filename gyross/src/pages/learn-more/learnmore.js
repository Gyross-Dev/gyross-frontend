import React from "react";
import "./learnmore.scss";
import gyros from "../../assets/icons/gyros.jpg";
import orsaline from "../../assets/icons/orsaline.jpg";
import speed from "../../assets/icons/speed.jpg";
import price from "../../assets/icons/price.jpg";

export default function quickmenu() {
  return (
    <>
      <div className="learn-more-container">
        <div class="plan">
          <h3>Quickmenu</h3>
          <img src={gyros} alt="gyros" />
          <ul>
            <li>Organic products you love from your local stores</li>
            <li>Handpicked by shoppers based on your preferences</li>
          </ul>
        </div>
        <div class="plan">
          <h3>9G Speed!</h3>
          <img src={speed} alt="speed" height="100" width="100" />
          <ul>
            <li>Fastest Delivery You can have</li>
            <li>#1 choice for Muslim-Americans</li>
          </ul>
        </div>
        <div class="plan">
          <h3>Free Orsaline</h3>
          <img src={orsaline} alt="orsaline" height="100" width="100" />
          <ul>
            <li>
              We guarantee freshness, but if anything goes wrong use our free
              orsaline provided with every gyross
            </li>
            <li>Order 1 extra for reduced price </li>
          </ul>
        </div>
        <div class="plan">
          <h3>True Price</h3>
          <img src={price} alt="price" height="100" width="100" />
          <ul>
            <li>
              Choose a halal cart of your choice or leave it up to us to find
              the best deal for you
            </li>
            <li>
              No compromise on taste, Handpicked best platter website for you!
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
