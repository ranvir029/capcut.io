import React, { useState } from "react";
const Prompt = () => {
  const prompts = [
    {
      content:
        "Double-exposure portrait of a thoughtful woman, blending a blurred motion cityscape into her silhouette. High contrast, cinematic atmosphere.",
      img: <img src="prompt-1.jpg" alt=""/>,
    },
    {
      content: "a man standing in hoodie and a jacket over it, surrounded by people who are blurred as the effect on photo while he is staying in focus of camera",
      img: <img src="prompt-2.jpg" alt=""/>,
    },
    {
      content: "same face overlapping with slight shifts in position, frontal and profile views merged, hyper-realistic skin texture with visible freckles.",
       img: <img src="prompt-3.jpg" alt=""/>,
    },
    {
      content: `High-fashion portrait of an Asian male model with a bleached platinum buzz cut, sharp facial features`,
       img: <img src="prompt-4.jpg" alt=""/>,
    },
    {
      content: "styling man wearing a pink sweater matching with blue pants with good background",
       img: <img src="prompt-5.jpg" alt=""/>,
    },
    {
      content: "close-up potrait of a beautiful women which flawless skin and expressive eyes accompained closely by a vivid bird",
        img: <img src="prompt-6.jpg" alt=""/>,
    },
    {
      content: "A stunning blend of minimalist layout,Inspired by Japanese poster design",
       img: <img src="prompt-7.jpg" alt=""/>,
    },
    {
      content: "“Anime-style portrait of a girl with vibrant red background, detailed expressive eyes",
       img: <img src="prompt-8.jpg" alt=""/>,
    },
    {
      content: "close up of a female face wind raising her hair a film grain effectClose-up portrait of a female face,wind blowing through her hair",
       img: <img src="prompt-9.jpg" alt=""/>,
    },
    {
      content: "A haunting close-up of a single eye peering through aged wooden bars, symbolizing mystery, resilience, and untold stories.",
      img: <img src="prompt-10.jpg" alt=""/>,
    },
    {
      content: "“Abstract painting of a woman, vibrant swirling colors and geometric shapes blending with her silhouette,",
        img: <img src="prompt-11.jpg" alt=""/>,
    },
    // add more prompts here
  ];
   const [copiedIndex, setCopiedIndex] = useState(null); 
  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  };

  return (
    <div className="bg-[#101932] min-h-screen">
      {/* heading */}
      <div className="heading flex justify-center items-center">
        <h1 className="text-white md:text-5xl text-[30px] font-[monospace] font-medium mt-10">
          Get Inspired-{" "}
          <span className=" text-blue-600  md:text-5xl text-[30px]">Pick a Prompt</span>
        </h1>
      </div>
      <div className="border-b mt-6 border-b-[#707070]"></div>

      {/* prompt cards */}
      <div className="prompt-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {prompts.map((prompt, id) => (
          <div
            key={id}
            className="bg-[#1a2749] text-white p-2 h-[61vh] rounded-2xl shadow-sm transform transition-transform cursor-pointer duration-300 hover:-translate-y-1 hover:shadow-zinc-400 flex flex-col justify-between"
          >
            {/* image first */}
            <div className="relative overflow-hidden rounded-xl object-cover h-[60vh] w-full">
              {prompt.img}
              {/* copy button at top-right of image */}
              <button
                onClick={() => handleCopy(prompt.content, id)}
                className="absolute top-2 right-2 bg-blue-600/80 hover:bg-blue-700 text-white text-xs rounded-lg px-3 py-2 backdrop-blur-sm"
              >
                {copiedIndex === id ? "Copied!" : "Copy Prompt"}
              </button>
            </div>
            {/* text at bottom */}
            <h1 className="text-justify text-zinc-200 p-2 font-medium text-[14.3px] relative tracking-tighter">
              {prompt.content}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Prompt;
