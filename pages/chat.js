import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";


const messages = [
  // "Why did the founder NFT see a therapist? Too many unresolved transactions!",
  // "Why did the server love Zo House? It’s where the best connections are made!",
  // "Why did the dosa go to the party? Because it knew how to roll!",
  // "What did the lemonade say to the watermelon juice? 'You're one in a melon!'",
  // "Why do clocks at Zo House always show 4:20? It’s always time to Zo!",
  // "Why was the lamp at Zo House really smart? Because it had a bright idea!",
  // "Why don't Zo clocks tick? They just ZO ZO ZO!",
  "GM GM",
  "ZO ZO Zo \\z/",
  "Ai Mayhem",
  "NFT NFT",

];


const chat = () => {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [initialMessage, setInitialMessage] = useState("Iam Bitroot");
  const [answer, setAnswer] = useState("How can I help you today?"); 


  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setInitialMessage(messages[randomIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); 


  const onEllipseClick = async () => {
    console.log(message, "Ellipse clicked");
    setInitialMessage("");

    const zoId = true;
    const zoLogin = localStorage.getItem("email");

    const zoCommand =  "zo zo";
   

    if (!zoLogin) {
      console.log("Please Login to user Zoid");
      // setInitialMessage("Hey Do login to You Zo ID");
      setAnswer("OPPS! Hey Do login to You Zo ID or Get Out - Type Zo Zo"); 

    }else {
      try {
        const response = await fetch('https://bitroot-pkrfjsbe6q-el.a.run.app/chat/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),  
        });
        const data = await response.json();
        console.log(data)
        setAnswer(data.response);
    } catch (error) {
        console.error('Error:', error);
        setAnswer('Error fetching data');
    }
    }
    if(message.toLowerCase() === zoCommand && !zoLogin) {
      console.log("Zo Login");

      // setAnswer("Zo Login");
      router.push('/login');
    }

    


    
  };

  const onLayer01Click = useCallback(() => {
    // Please sync "iPhone 13 & 14 - 8" to the project
    router.push("/");
  }, []);
  const onProfile = useCallback(() => {
    
    window.location.href = "https://www.google.com";
  }, []);

  const handleClickLogo = () => {
    
    const storedEmail = localStorage.getItem("email");

    // Log the email value to the console
    console.log(storedEmail, "stored Email");
    // router.push('/chat');


  }

  //api code
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };



  console.log(responseText, "responseText");

  return (
    <div className="w-full relative h-[844px] overflow-hidden bg-[url('/iphone-13--14--10@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-sm text-white font-space-grotesk">
      {/* <img
        className="absolute top-[-43px] left-[-26.05px] w-[446.2px] h-[887px] object-cover"
        alt=""
        src="/909ad238365dbdd7ee088110a24edb39-1@2x.png"
      /> */}
     
      <div className="absolute top-[758px] left-[26px] rounded-[23px] bg-black box-border w-[337px] h-[46px] border-[1px] border-solid border-white" />
      <div className="absolute top-[790px] left-[49px] tracking-[0.05em] font-light inline-block w-[229px] h-[22px]">
        <p className="m-0">&nbsp;</p>
      </div>
      
      <div onClick={handleClickLogo} className="absolute top-[219px] left-[118.5px] w-[162px] h-[152px]">
        <div className="absolute top-[52px] left-[42px] rounded-[50%] bg-orange w-[100px] h-[100px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[162px] h-[143px] object-cover"
          alt=""
          src="/bitroot-2@2x.png"
        />
      </div>
      <b className="absolute top-[84px] left-[135.5px] tracking-[0.05em] inline-block text-center w-[124px] h-[22px]">
        {initialMessage}
      </b>
      <div className="absolute top-[408px] left-[87px] text-base tracking-[0.05em] inline-block w-[225px] h-[22px]">
        <p className="m-0">{answer}</p>
      </div>
      {/* <div className="absolute top-[771px] left-[48px] text-base tracking-[0.05em] text-silver inline-block w-[225px] h-[22px]">
        Chat Bitoort
      </div> */}
      <input
        type="text"
        className="absolute top-[771px] left-[48px] text-base tracking-[0.05em] bg-black text-white inline-block w-[255px] h-[22px]"
        onChange={(e) => setMessage(e.target.value)} // Update the state variable with the input value}
      />
      <div
        className="absolute top-[762px] left-[320px] rounded-[50%] bg-gainsboro w-[39px] h-[39px] cursor-pointer"
        onClick={onEllipseClick}
        // onClick={handleSendClick}
      />
      <img
        onClick={onEllipseClick}
        className="absolute  top-[771.07px] left-[329.07px] w-[21.8px] h-[21.8px]"
        alt=""
        src="/group-28.svg"
        style={{ cursor: "pointer" }}
      />
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
          onClick={onProfile}
        />
      </div>
    </div>
  );
};

export default chat;
