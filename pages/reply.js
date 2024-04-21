import { useCallback } from "react";

const reply = () => {
  const onBitroot2ImageClick = useCallback(() => {
    // Please sync "iPhone 13 & 14 - 26" to the project
  }, []);

  const onLayer01Click = useCallback(() => {
    // Please sync "iPhone 13 & 14 - 8" to the project
  }, []);

  return (
    <div className="w-full relative h-[844px] overflow-hidden bg-[url('/iphone-13--14--27@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-sm text-white font-space-grotesk">
      <img
        className="absolute top-[-25px] left-[-14px] w-[446.2px] h-[887px] object-cover"
        alt=""
        src="/909ad238365dbdd7ee088110a24edb39-1@2x.png"
      />
      <div className="absolute top-[790px] left-[49px] tracking-[0.05em] font-light inline-block w-[229px] h-[22px]">
        <p className="m-0">&nbsp;</p>
      </div>
      <img
        className="absolute top-[771.07px] left-[329.07px] w-[21.8px] h-[21.8px]"
        alt=""
        src="/group-28.svg"
      />
      <div className="absolute top-[759px] left-[27px] rounded-[23px] bg-black box-border w-[337px] h-[46px] border-[1px] border-solid border-white" />
      <div className="absolute top-[762px] left-[320px] rounded-[50%] bg-gainsboro w-[39px] h-[39px]" />
      <div className="absolute top-[220px] left-[148px] rounded-[50%] box-border w-[127px] h-[127px] border-[1.9px] border-solid border-orange" />
      <div className="absolute top-[220px] left-[148px] rounded-[50%] box-border w-[127px] h-[127px] border-[1.9px] border-solid border-orange" />
      <img
        className="absolute top-[771.07px] left-[329.07px] w-[21.8px] h-[21.8px]"
        alt=""
        src="/group-28.svg"
      />
      <div className="absolute top-[772px] left-[49px] text-[16px] tracking-[0.05em] text-silver inline-block w-[225px] h-[22px]">
        Hello Bitroot
      </div>
      <div className="absolute top-[234px] left-[161px] rounded-[50%] bg-orange box-border w-[100px] h-[100px] border-[1px] border-solid border-orange" />
      <img
        className="absolute top-[180px] left-[119px] w-[162px] h-[143px] object-cover cursor-pointer"
        alt=""
        src="/bitroot-2@2x.png"
        onClick={onBitroot2ImageClick}
      />
      <b className="absolute top-[377px] left-[127px] text-[26.91px] tracking-[0.05em] inline-block w-[159px] h-[35px]">
        “Yes Boss”
      </b>
      <b className="absolute top-[355px] left-[138px] tracking-[0.05em] inline-block text-center w-[124px] h-[22px]">{`Iam Bitroot `}</b>
      <div className="absolute top-[15px] left-[19px] w-[357.5px] h-[39px]">
        <img
          className="absolute top-[7.5px] left-[0px] w-[34.1px] h-7 object-cover cursor-pointer"
          alt=""
          src="/layer-0-1@2x.png"
          onClick={onLayer01Click}
        />
        <img
          className="absolute top-[0px] left-[318.5px] rounded-[50%] w-[39px] h-[39px] object-cover"
          alt=""
          src="/ellipse-8@2x.png"
        />
      </div>
    </div>
  );
};

export default reply;
