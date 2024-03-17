import bgImg from "./assets/illustration-article.svg";
import profileImg from "./assets/image-avatar.webp";

const App: React.FC = () => {
  return (
    <section className=" hover:drop-shadow-card-hover-shadow drop-shadow-card-shadow flex max-w-[327px] flex-col gap-6 rounded-[20px] border border-Black bg-White p-6 transition md:max-w-[384px]">
      <img
        src={bgImg}
        alt=""
        className="md:h-[200px]w-full  rounded-[10px] object-cover"
      />
      <div className="flex flex-col gap-3">
        <span className="w-fit rounded-[4px] bg-Yellow px-3 py-1 text-xs font-extrabold leading-normal text-Black md:h-[29px]">
          Learning
        </span>
        <p className="h-[21px] text-xs font-medium leading-normal text-Black md:text-sm">
          Published 21 Dec 2023
        </p>
        <h1 className=" cursor-pointer text-xl font-extrabold leading-normal text-Black transition-colors hover:text-Yellow md:text-2xl">
          <a href="#" className="">
            HTML & CSS foundations
          </a>
        </h1>
        <p className="text-sm leading-normal text-Grey md:text-base">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="group flex max-w-fit cursor-pointer items-center gap-3">
        <img
          src={profileImg}
          alt=""
          className="h-8 w-8 rounded-full group-active:scale-105"
        />
        <span className="text-sm font-bold transition-colors group-hover:text-Yellow">
          Greg Hooper
        </span>
      </div>
    </section>
  );
};

export default App;
