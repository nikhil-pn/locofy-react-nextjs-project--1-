import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { useState } from "react";

const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(email, password, "email", "password");
    localStorage.setItem("email", email);

    const storedEmail = localStorage.getItem("email");

    if (storedEmail) {
      router.push("/chat");
    }
  };

  return (
    <div className="w-full relative h-[844px] overflow-hidden bg-[url('/iphone-13--14--9@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-sm text-white font-space-grotesk">
      <img
        className="absolute top-[-43px] left-[-26.05px] w-[446.2px] h-[887px] object-cover"
        alt=""
        src="/909ad238365dbdd7ee088110a24edb39-1@2x.png"
      />
      <div className="absolute top-[329px] left-[41px] [backdrop-filter:blur(0px)] bg-lightgray box-border w-[312px] h-[51px] border-[2.8px] border-solid border-gray-200" />
      <div className="absolute top-[391px] left-[41px] [backdrop-filter:blur(0px)] bg-lightgray box-border w-[312px] h-[51px] border-[2.8px] border-solid border-gray-200" />
      <b className="absolute top-[224px] left-[71px] text-[35.6px] tracking-[-0.03em] text-gray-100">
        CR
      </b>
      <div className="absolute top-[294px] left-[78px] tracking-[0.05em] font-light inline-block w-[229px] h-[22px]">
        Please sign in to your account
      </div>
      <input
        className="absolute top-[346px] left-[57px] font-light font-poppins  bg-black text-white inline-block w-[265px] h-[22px]"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        className="absolute top-[407.5px] left-[57px] font-light font-poppins bg-black text-white inline-block w-[265px] h-[22px]"
        type="password"
      />

      <div className="absolute top-[495px] left-[111px] rounded-[6.69px] bg-darkviolet w-[180.1px] h-[43px] overflow-hidden flex flex-row items-center justify-center py-[14.7px] px-[54.1px] box-border text-[16.03px] font-poppins">
        <div onClick={handleClick} className="relative  font-medium">
          Sign in
        </div>
      </div>
      <div className="absolute top-[808.25px] left-[127px] text-[15px] font-inter whitespace-pre-wrap">
        Made in House
      </div>
      <img
        className="absolute top-[797px] left-[185.75px] w-[35px] h-[28.8px] object-cover"
        alt=""
        src="/layer-0-1@2x.png"
      />
      <div className="absolute top-[203px] left-[166px] text-[51.78px] tracking-[-0.03em] font-medium text-darkviolet">{`Hy `}</div>
    </div>
  );
};

export default login;
