/** @format */

import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });

  const handleSumbit = async (e) => {
    alert("Submit");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/*Search*/}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSumbit}
        >
          <img
            src={linkIcon}
            alt="linkIcon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a url here"
            value={article.url}
            onChange={(e) =>
              setArticle({
                article,
                url: e.target.value,
              })
            }
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700:"
          >
            Enter
          </button>
        </form>

        {/*history*/}
      </div>
    </section>
  );
};

export default Demo;
