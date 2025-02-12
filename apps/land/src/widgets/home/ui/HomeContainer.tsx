import Image from "next/image";
import LandHeaderImg from "../../../../public/images/land-header.png";
import OpinionUnit from "./OpinionUnit";

import { TEXT } from "@/widgets/home/model";
import { cn } from "@/shared/utils";
import FeatureCarousel from "./FeatureCarousel";

export default function HomeContainer() {
  return (
    <div className="flex w-full flex-col">
      <div className="relative flex size-fit">
        <div className="absolute inset-0 box-border flex size-full flex-col justify-center gap-y-4 px-40 py-20 text-white">
          <div>
            {TEXT.HEADER.TITLE.split("n").map((val, i) => (
              <p key={val} className={cn(i === 0 ? "text-md" : "text-xl")}>
                {val}
              </p>
            ))}
          </div>
          <div className="text-sm">
            {TEXT.HEADER.SUBTITLE.split("n").map((val) => (
              <p key={val}>{val}</p>
            ))}
          </div>
        </div>
        <Image alt="landing-header" src={LandHeaderImg} />
      </div>
      <div className="mt-20 box-border flex flex-col items-center justify-center">
        <p className="text-text-light pb-4 text-lg">
          {TEXT.HOME.LAND_QUESTION}
        </p>
        <p className="text-xl">{TEXT.HOME.LAND_MESSAGE_1}</p>
        <p className="text-xl font-bold">{TEXT.HOME.LAND_MESSAGE_2}</p>
        <div className="mt-20 flex h-fit w-[68%] flex-col gap-y-8">
          {[1, 2, 3].map((i) => (
            <OpinionUnit key={i} reversed={i % 2 === 0} index={i} />
          ))}
        </div>
        <div className="mt-24 flex flex-col items-center justify-center">
          <p className="text-xl">{TEXT.HOME.FEATURE_INTRODUCE_1}</p>
          <p className="text-xl font-bold">{TEXT.HOME.FEATURE_INTRODUCE_2}</p>
        </div>
        <FeatureCarousel />
      </div>
    </div>
  );
}
