import React from "react";
import "./CartWidget.css";

import { TiShoppingCart } from "react-icons/ti";

export default function CartWidget() {
  return (
    <div className="cart">
      <TiShoppingCart />
      <span>10</span>
    </div>
  );
}
