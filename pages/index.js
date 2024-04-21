import { Router, useRouter } from "next/router";
import { useCallback } from "react";

const IPhone1314 = () => {
  const router = useRouter();
  const onBITROOTTextClick = useCallback(() => {
    // Please sync "iPhone 13 & 14 - 10" to the project
    router.push('/chat');
  }, [router]);

  return (
    <div className="w-full relative h-[844px] overflow-hidden bg-[url('/iphone-13--14--8@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[35.6px] text-white font-space-grotesk">
      <img
        className="absolute top-[-43px] left-[-26.05px] w-[446.2px] h-[887px] object-cover"
        alt=""
        src="/909ad238365dbdd7ee088110a24edb39-1@2x.png"
      />
      <div className="absolute top-[362px] left-[156px] rounded-[50%] bg-orange w-[100px] h-[100px]" />
      <img
        className="absolute top-[244px] left-[76px] w-[244.7px] h-[216px] object-cover"
        alt=""
        src="/bitroot-2@2x.png"
      />
      <b
        className="absolute top-[463px] left-[141px] tracking-[-0.03em] cursor-pointer"
        onClick={onBITROOTTextClick}
      >
        BITROOT
      </b>
      <div className="absolute top-[798px] left-[137px] w-[126px] h-[26.1px] text-[13.5px] font-inter">
        <div className="absolute top-[10.13px] left-[0px] whitespace-pre-wrap">
          Made in House
        </div>
        <img
          className="absolute top-[0px] left-[52.88px] w-[31.5px] h-[25.9px] object-cover"
          alt=""
          src="/layer-0-1@2x.png"
        />
      </div>
    </div>
  );
};

export default IPhone1314;
