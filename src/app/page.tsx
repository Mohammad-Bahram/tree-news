"use client";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HomeNotification from "../containers/Home/HomeNotification";
import LatestNews from "../containers/Home/LatestNews/LatestNews";
import FirstAd from "../containers/Home/Advertisment/First";
import SecondAd from "../containers/Home/Advertisment/Second";
import World from "../containers/Home/World/World";
import Politics from "../containers/Home/Politics/Politics";
import Slider from "../components/slider/Slider";
export default function Home() {
  return (
    <main
      suppressHydrationWarning={true}
      style={{ fontFamily: "IranYekan" }}
      className="w-full h-[100px]   "
      dir="rtl"
    >
      <Header />
      <HomeNotification />
      <LatestNews />
      <FirstAd />
      <World />
      <Slider />
      <Politics />
      <SecondAd />
      <Footer />
    </main>
  );
}
