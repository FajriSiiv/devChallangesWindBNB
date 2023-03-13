import React from "react";
import hotel1 from "/src/images/hotel1.jpg";
import hotel2 from "/src/images/hotel2.jpg";
import hotel3 from "/src/images/hotel3.jpg";
import hotel4 from "/src/images/hotel4.jpg";
import { AiFillStar } from "react-icons/ai";

interface CardFace {
  host?: Boolean;
  spec: String;
  star: String;
  title: String;
  img: any;
}

export const Main = () => {
  const CardComp = ({ host, spec, star, title, img }: CardFace) => {
    return (
      <div className="md:w-1/3 w-full sm:w-1/2">
        <div className="w-11/12 flex flex-col mx-auto">
          <div className="max-h-[300px] w-full overflow-hidden rounded-3xl">
            <img src={img} alt="unsplash" />
          </div>
          <div className="mt-2">
            <div className="flex justify-between mb-2 sm:mb-0">
              <div className="flex justify-start sm:items-center gap-x-2 flex-col sm:flex-row sm:justify-center items-start gap-y-2 mt-2">
                {host ? (
                  <span className="uppercase border border-gray-400 rounded-full font-bold text-xs text-gray-600 px-2 py-2">
                    Super Host
                  </span>
                ) : null}
                <h2 className="text-xs text-gray-400">{spec}</h2>
              </div>
              <div className="flex justify-center items-center gap-x-[1px]">
                <AiFillStar className="text-yellow-400 w-5 h-5" />
                <span className="text-sm font-semibold">{star}</span>
              </div>
            </div>
            <h3 className="font-medium">{title}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between mb-5 items-center">
        <h2 className="font-semibold text-2xl">Stay in Findland</h2>
        <span className="text-medium text-sm">12+ stays</span>
      </div>
      <div className="w-full h-full flex flex-wrap gap-y-10">
        <CardComp
          host={true}
          spec="Entire apartment . 2 beds"
          star="4.4"
          title="Stylist apartment in center of the city"
          img={hotel1}
        />
        <CardComp
          spec="Private room"
          star="4.25"
          title="Cozy, peaceful and private room"
          img={hotel2}
        />
        <CardComp
          spec="Entire house"
          star="4.96"
          title="Mordern House in a remote area"
          img={hotel3}
        />
        <CardComp
          host={true}
          spec="Entire apartment . 2 beds"
          star="4.85"
          title="Stylist room in design district "
          img={hotel4}
        />
        <CardComp
          spec="Private room"
          star="4.54"
          title="Modern apartment close to nature"
          img={hotel1}
        />
        <CardComp
          spec="Entire house"
          star="4.96"
          title="House in a remote area"
          img={hotel2}
        />
      </div>
    </div>
  );
};
