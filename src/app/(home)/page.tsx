import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Products from "@/components/home/products";
import { Suspense } from "react";
import Loading from "../loading";
import {
  ErrorBoundary,
  ErrorComponent,
} from "next/dist/client/components/error-boundary";
import Error from "../error";

const Home = () => {
  return (
    <div className="page">
      <Hero />

      <Features />

      <ErrorBoundary errorComponent={Error as ErrorComponent}>
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
