"use client";

import { useTotalPrice } from './TotalPriceContext';

const DisplayTotalPrice: React.FC = () => {
  const { totalPrice } = useTotalPrice();

  return (
    <div>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default DisplayTotalPrice;
