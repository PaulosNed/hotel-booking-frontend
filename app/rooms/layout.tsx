import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms"
}

export default function RoomsLayoout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bgImageUrl = "/images/home/nahu7.jpg";
  return (
    <div className="flex flex-col space-y-16 md:space-y-28 pb-10">
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
          <p className="mt-2 text-2xl md:text-5xl uppercase">Our rooms</p>
        </div>
      </div>

      {children}
      
    </div>
  );
}
