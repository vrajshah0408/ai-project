/** @format */

import { logo } from "../assets/";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-2 ">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/vrajshah0408")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles using <br className="max-md:hidden"/>
        <span className="red_gradient"> OpenAi GPT-3</span>
      </h1>
      <h2 className="desc">
        Summize your article using ai
      </h2>
    </header>
  );
};

export default Hero;
