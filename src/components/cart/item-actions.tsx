"use client";

import { removeFromBasket, updateQuantity } from "@/service/basket-service";
import { BasketItem } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  item: BasketItem;
}

const ItemActions: FC<Props> = ({ item }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleQuantity = async (newQuantity: number) => {
    setIsLoading(true);

    try {
      await updateQuantity(item.grocery._id, newQuantity);
      router.refresh();
    } catch (error) {
      toast.error("İşlem başarısız");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = async () => {
    setIsLoading(true);

    try {
      await removeFromBasket(item.grocery._id);
      router.refresh();
    } catch (error) {
      toast.error("İşlem başarısız");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded-md mr-4">
        <button
          disabled={isLoading || item.quantity === 1}
          onClick={() => handleQuantity(item.quantity - 1)}
          className="counter-button"
        >
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-9 text-center">
          {item.quantity}
        </span>

        <button
          disabled={isLoading || item.quantity === item.grocery.stock}
          onClick={() => handleQuantity(item.quantity + 1)}
          className="counter-button"
        >
          <FaPlus />
        </button>
      </div>

      <button
        disabled={isLoading}
        onClick={handleRemove}
        className="text-red-600 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
