import { getAllProducts } from "@/service/product-service";
import { Product } from "@/types";
import { FC } from "react";
import Card from "./card";
import { categoryNames } from "@/utils/constants";

const Products: FC = async () => {
  // api'dan ürün verilerini al
  const { groceries } = await getAllProducts();

  // api'dan karışık olarak gelen ürün verilerini kategorilerine göre alt dizilere ayır
  const groupedProducts = groceries.reduce<Record<string, Product[]>>(
    (obj, grocery) => {
      // ürün kategorisini al
      const category = grocery.category;

      // nesne içerisinde kategori ismine karşılık gelen bir alan yoksa kategori isminde boş bir dizi oluştur
      if (!obj[category]) {
        obj[category] = [];
      }

      // nesne içerisinde ürünün kategorisine ait olan diziye ürüne ekle
      obj[category].push(grocery);

      // nesneyi döndür
      return obj;
    },
    {},
  );

  return (
    <div className="space-y-10">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-5">
            {categoryNames[category as keyof typeof categoryNames]}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
