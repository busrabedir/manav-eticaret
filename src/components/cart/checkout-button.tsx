"use client";

import { checkoutBasket } from "@/service/basket-service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { toast } from "react-toastify";

const CheckoutButton: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      // sepetteki ürünler için satın alım oturumu oluştur
      const res = await checkoutBasket();

      // kullanıcıyı backendin gönderdiği url'ye yönlendir
      window.location.href = res.url;
    } catch (error) {
      toast.error("Bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleCheckout}
      className="flex items-center cursor-pointer justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700"
    >
      <MdOutlineShoppingCartCheckout />
      Ödeme Yap
    </button>
  );
};

export default CheckoutButton;
