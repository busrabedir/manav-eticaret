import { Basket } from "@/types";
import { FC } from "react";
import CheckoutButton from "./checkout-button";
import Link from "next/link";

interface Props {
  cart: Basket;
}

const CartSummary: FC<Props> = ({ cart }) => {
  const total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6 sticky max-lg:mt-4">
      <h2 className="font-semibold">Sipariş Özeti</h2>

      <div className="space-y-3 mt-3. mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Ürünler Toplamı</span>
          <span className="font-semibold text-lg text-green-600">
            {total} ₺
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Kargo</span>
          <span className="font-semibold text-lg">Bedava</span>
        </div>

        <hr className="text-zinc-300" />

        <div className="flex justify-between text-gray-600">
          <span>Toplam</span>
          <span className="font-semibold text-lg text-green-600">
            {total} ₺
          </span>
        </div>

        <CheckoutButton />

        <Link
          href="/"
          className="block text-center mt-4 text-green-600 hover:underline"
        >
          Alışverişe Devam Et
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
