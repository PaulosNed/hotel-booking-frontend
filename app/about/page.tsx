import React from "react";
import TabsDetail from "@/components/about/TabsDetail";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About"
}


const page = () => {
  const bgImageUrl = "/images/home/nahu7.jpg";
  const accordionData = [
    {
      value: "story",
      title: "Our story",
      desc: "Nahusenay international hotel is upscale Three star hotel located in addisu gebya sheger infront of CRRSA, Addis Ababa Ethiopia. This hotel meets the needs and wants of the customer to the higher level with high level hospitality. This modern and trendy star hotel in Addis Ababa is strategically & conveniently in close proximity to the City’s business area. Nahusenay international offers Restaurant and Bar, Spa Centre, Meeting and wedding hall accommodate up to 400 person. It also offers 46 standard guest rooms & suites with stem and Jacquie equipped shower rooms, Bathroom amenities, High speed internet Wi-Fi, and TV and 24-hour room dining services.",
      image1:
        "/images/about/story/photo_2024-01-06_13-15-32.jpg",
      image2:
        "/images/about/story/photo_2024-01-06_13-15-51.jpg",
      image3:
        "/images/about/story/photo_2024-01-06_13-31-40.jpg",
    },
    {
      value: "bar",
      title: "BAR & RESTURANT",
      desc: "Ascending to our rooftop sports bar unveils a breathtaking panorama of the city skyline, offering not only a mesmerizing view but an electrifying experience with live sports entertainment. Positioned atop our building, this space merges the thrill of the game with an unparalleled scenic backdrop, inviting guests to unwind amidst the excitement and grandeur. Meanwhile, our lobby bar, a serene enclave within our establishment, provides a peaceful retreat for those seeking a more tranquil atmosphere. Whether in the dynamic energy of our rooftop or the calm embrace of our lobby, we remain dedicated to pampering our guests with an extensive selection of exceptional beverages, ensuring each visit is an exquisite experience tailored to their preferences.",
      image1:
        "/images/about/bar/bar_1.jpg",
      image2:
        "/images/about/bar/bar_2.jpg",
      image3:
        "/images/about/bar/bar_3.jpg",
    },
    {
      value: "wellness",
      title: "WELLNES CENTER",
      desc: "After a long and demanding day, find rejuvenation and relaxation at Nahusenay Spa. Our commitment lies in tailoring experiences to meet the unique needs of each guest. Through carefully curated programs and a range of services, we aim to provide the pinnacle of relaxation. Whether it's a therapeutic massage, revitalizing treatments, or personalized care, our spa is dedicated to ensuring that every guest leaves feeling refreshed, renewed, and ready to take on the world again. ",
      image2:
        "/images/about/wellness/photo_2024-01-06_14-16-07.jpg",
      image3:
        "/images/about/wellness/photo_2024-01-06_14-16-17.jpg",
      image1:
        "/images/about/wellness/photo_2024-01-06_14-22-15.jpg",
    },
    {
      value: "meeting",
      title: "METTING & EVENTS",
      desc: "When it comes to event planning, having versatile venue options is key. Our selection encompasses spaces tailored to meet a spectrum of needs, be it a corporate affair, a romantic wedding, or any special celebration you have in mind. These venues boast diverse configurations, allowing for flexibility in layout and style to suit your preferences. From elegant ballrooms to charming outdoor spaces, each venue is equipped to comfortably accommodate gatherings of varying sizes, ensuring a seamless experience for both hosts and guests. Whether aiming for an intimate ambiance or a larger-scale celebration, our venues provide the canvas upon which to craft unforgettable moments.",
      image2:
      "/images/about/meeting/photo_2024-01-06_14-20-53.jpg",
      image1:
        "/images/about/meeting/meeting_2.jpg",
      image3:
        "/images/about/meeting/photo_2024-01-06_14-22-15.jpg",
    },
    {
      value: "sister",
      title: "Sister Company",
      desc: "Nahusenay Oil Manufacturing Industry, founded in 2015, is a forward-thinking company dedicated to the production and innovation of high-quality oil products. Since its inception, the company has been committed to sustainable practices and excellence, striving to meet the evolving needs of its customers while maintaining a strong focus on environmental responsibility and community development.",
      image2:
        "https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?cs=srgb&dl=pexels-chan-walrus-941864.jpg&fm=jpg",
      image1:
        "https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg",
      image3:
        "https://t3.ftcdn.net/jpg/03/08/47/58/360_F_308475881_m7o04LTdIbwWWnSJDqjFTjOnWvU0yj8b.jpg",
    },
  ];

  return (
    <div className="flex flex-col space-y-10 pb-28">
      <div className="w-full h-[120px] md:h-[200px] relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex flex-col space-y-16 justify-center items-center text-center text-white font-montserrat z-10">
          <p className="mt-2 text-2xl md:text-5xl uppercase">About Us</p>
        </div>
      </div>

      <TabsDetail accordionData={accordionData} />
    </div>
  );
};

export default page;
