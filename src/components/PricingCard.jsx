import { useState } from "react";
import "./pricing.css";

export default function PricingCard() {
  const [select, setSelected] = useState("Yearly");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const calculatePrice = () => {
    const totalPrice = 18500;
    const yearlyPrice = 179;
    const halfYearlyPrice = 149;
    const quarterlyPrice = 99;
    if (select === "Yearly") {
      const discountPrice = totalPrice - yearlyPrice;
      return { discountPrice, actualPrice: yearlyPrice };
    } else if (select === "halfYearly") {
      const discountPrice = totalPrice - halfYearlyPrice;
      return { discountPrice, actualPrice: halfYearlyPrice };
    }
    if (select === "Quarterly") {
      const discountPrice = totalPrice - quarterlyPrice;
      return { discountPrice, actualPrice: quarterlyPrice };
    }
  };

  const calculatedPrice = calculatePrice();

  return (
    <div className="pricing">
      <div className="el-ac-btnbox">
        <a href="#" className="el-ac-btn">
          <span className="numbox">1</span>
          <span className="el-ac-text">Sign up</span>
        </a>
        <a href="#" className="el-ac-btn">
          <span className="numbox">2</span>
          <span className="el-ac-text">Subscribe</span>
        </a>
      </div>
      <div className="el-sel-text">
        <span>Select your subscription plan</span>
      </div>
      <div className="plans">
        <div className="plan disablePlan" aria-disabled={true}>
          <div className="plan__left">
            <label className="input__container" htmlFor="premium">
              <input type="radio" name="premium" id="premium" value="Premium" />
              <span className="checkmark"></span>
            </label>
            <span className="el-planName">12 Months Subscription</span>
          </div>
          <div className="plan__right">
            <span className="total">
              Total <span className="totalPrice">₹99</span>
            </span>
            <span className="monthlyCost">
              ₹8 <span className="monthlyText">/mo</span>
            </span>
          </div>
          <div className="disableBG"></div>
          <div className="tagText">Offer expired</div>
        </div>
        <div
          className="plan"
          aria-selected={select === "Yearly" ? true : false}
        >
          <div className="plan__left">
            <label className="input__container" htmlFor="plan1">
              <input
                type="radio"
                id="plan1"
                value="Yearly"
                checked={select === "Yearly"}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            <span className="el-planName">12 Months Subscription</span>
          </div>
          <div className="plan__right">
            <span className="total">
              Total <span className="totalPrice">₹179</span>
            </span>
            <span className="monthlyCost">
              ₹15 <span className="monthlyText">/mo</span>
            </span>
          </div>
          <div className="tagText">Recommanded</div>
        </div>
        <div
          className="plan"
          aria-selected={select === "halfYearly" ? true : false}
        >
          <div className="plan__left">
            <label className="input__container" htmlFor="plan2">
              <input
                type="radio"
                id="plan2"
                value="halfYearly"
                checked={select === "halfYearly"}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            <span className="el-planName">6 Months Subscription</span>
          </div>
          <div className="plan__right">
            <span className="total">
              Total <span className="totalPrice">₹149</span>
            </span>
            <span className="monthlyCost">
              ₹25 <span className="monthlyText">/mo</span>
            </span>
          </div>
        </div>
        <div
          className="plan"
          aria-selected={select === "Quarterly" ? true : false}
        >
          <div className="plan__left">
            <label className="input__container" htmlFor="plan3">
              <input
                type="radio"
                id="plan3"
                value="Quarterly"
                checked={select === "Quarterly"}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            <span className="el-planName">3 Months Subscription</span>
          </div>
          <div className="plan__right">
            <span className="total">
              Total <span className="totalPrice">₹99</span>
            </span>
            <span className="monthlyCost">
              ₹33 <span className="monthlyText">/mo</span>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="subFee">
        <span className="subFee-text">Subscription Fee</span>
        <span className="subFee-amount">₹18,500</span>
      </div>
      <div className="offerBox">
        <div className="offerLeft">
          <span className="offerLeft-text">Limited time offer</span>
          <p className="offerLeft-bottomText">
            <img src="./running-time-ic.png" alt="Running Time Icon" />
            <span>(Offer valid till 25th March 2023)</span>
          </p>
        </div>
        <span className="offerBox-amount">
          - ₹{calculatedPrice.discountPrice.toLocaleString()}
        </span>
      </div>
      <div className="totalFee">
        <span className="totalFee-text">
          Total
          <span className="totalFee-textLight">(Incl. of 18% GST)</span>
        </span>
        <span className="totalFee-Amount">₹ {calculatedPrice.actualPrice}</span>
      </div>
      <div className="aheadbtns">
        <button className="cancel btn">Cancle</button>
        <button className="accept btn">Proceed to pay</button>
      </div>
      <div className="payOption">
        <img src="./rozarpay-ic.png" alt="" />
      </div>
    </div>
  );
}
