"use client";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "@/context/useCart";

export default function Header() {
  const { cartCount, cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="flex justify-between items-center max-h-[200px] h-[100px] bg-green-50 px-10 relative">
      <div className="text-2xl font-bold">E-commerce</div>

      <div className="relative cursor-pointer" onClick={toggleCart}>
        <CiShoppingCart className="text-3xl" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute right-10 top-[100px] w-64 bg-white border shadow-lg rounded p-4 transition-all transform origin-top scale-y-100">
          <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
          {cartItems.length > 0 ? (
            <ul className="text-gray-700">
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2 flex justify-between">
                  <span>{item.title}</span>
                  <span>
                    ${item.price} x {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
}
