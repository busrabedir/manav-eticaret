"use client";

import { clearBasket } from "@/service/basket-service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "react-toastify";

const ClearButton: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClear = async () => {
    setIsLoading(true);

    try {
      await clearBasket();
      router.refresh();
    } catch (error) {
      toast.error("Bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleClear}
      className="hover:text-red-800"
    >
      Temizle
    </button>
  );
};

export default ClearButton;
