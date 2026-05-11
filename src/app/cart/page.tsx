import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import ClearButton from "@/components/cart/clear-button";
import EmptyCart from "@/components/cart/empty-cart";
import { getBasket } from "@/service/basket-service";
import { FC } from "react";

const Page: FC = async () => {
  const { cart } = await getBasket();

  if (cart.items.length === 0) return <EmptyCart />;

  return (
    <div className="page">
      <h1 className="font-bold text-2xl mb-6 text-gray-800">
        Alışveriş Sepeti
      </h1>

      <div className="lg:flex gap-6">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg">Sepetiniz ({cart.items.length})</h2>
              <ClearButton />
            </div>

            <ul>
              {cart.items.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {cart.items.length > 0 && (
          <div className="lg:w-1/3">
            <CartSummary cart={cart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
