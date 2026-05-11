import { getOrders } from "@/service/basket-service";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IoIosCheckmark } from "react-icons/io";

const Page: FC = async () => {
  const { orders } = await getOrders();
  const order = orders.at(-1);

  return (
    <div className="h-[80vh]">
      <div className="h-2/5 bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <IoIosCheckmark className="text-[100px]" />
          <p className="font-semibold text-4xl">Ödeme Başarılı Oldu</p>
        </div>
      </div>

      <div className="h-3/5 p-10 text-black flex flex-col justify-center">
        <ul className="border border-zinc-200 shadow rounded-md max-w-2xl w-full mx-auto">
          {order?.items.map((item) => (
            <li
              className="flex items-center justify-between p-2 border-b border-zinc-200"
              key={item.product._id}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={item.product.photo}
                  alt={item.name}
                  width={60}
                  height={60}
                  unoptimized
                />
                <h5 className="font-semibold">{item.product.name}</h5>
              </div>

              <p className="text-green-700">
                {item.price}₺ x {item.quantity}
                {item.product.unit}
              </p>
            </li>
          ))}
        </ul>

        <div className="text-center my-5 flex gap-5 justify-center">
          <Link
            href="/orders"
            className="border shadow py-2 px-5 rounded-lg hover:shadow-lg hover:bg-gray-100"
          >
            Siparişlerim
          </Link>
          <Link
            href="/"
            className="border shadow py-2 px-5 rounded-lg hover:shadow-lg hover:bg-gray-100"
          >
            Anasayfa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
