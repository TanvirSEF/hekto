import Banner from "../components/Banner";
import FeaturedProduct from "../components/FeaturedProduct";
import LatestProduct from "../components/LatestProduct";
import WhatOffer from "../components/WhatOffer";
import AdvertiseProduct from "../components/AdvertiseProduct";
import TrendingProducts from "../components/TrendingProducts";
import DiscountItem from "../components/DiscountItem";
import TopCategories from "../components/TopCategories";
import UpdateBan from "../components/UpdateBan";
import Logos from "../components/Logos";
import LatestBlog from "../components/LatestBlog";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedProduct />
      <LatestProduct />
      <WhatOffer />
      <AdvertiseProduct />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <UpdateBan />
      <Logos />
      <LatestBlog />
    </>
  );
};

export default Home;
