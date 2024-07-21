import "./App.css";

export default function App() {
  return (
    <>
      <div className="w-screen">
        <div className="flex items-center cta">
          <div className="py-8 my-2 content">
            <h1 className="mb-2 text-xl font-bold sm:text-2xl ">
              Responsive layouts don’t have to be a struggle
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <a className="px-[1.5em] py-[0.75em] text-[0.5rem] sm:text-[0.75rem] md:text-[1rem] font-semibold text-black bg-blue-400 rounded-full cursor-pointer">
              I WANT TO LEARN
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
