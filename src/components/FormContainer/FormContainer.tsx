import * as React from "react";

interface IFormContainerProps {}

export const FormContainer: React.FunctionComponent<IFormContainerProps> = (
  props
) => {
  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover text-white bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
          <h2 className="text-4xl text-center pb-4">URL Shortner</h2>
          <p className="text-center pb-2 text-xl font-extralight">
            Paste your untidy link to shorten it
          </p>
          <p className="text-center pb-4 text-sm font-thin">
            free tool to shorten a URL or reduce, Use our URL Shortner to create
            shortened and neat link and making it easy to use.
          </p>
          <form>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  urlshortner.link /
                </div>
                <input
                  type="text"
                  placeholder="Add your link"
                  required
                  className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 ps-32"
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5  text-sm font-medium h-full text-white bg-blue-700 rounded border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};