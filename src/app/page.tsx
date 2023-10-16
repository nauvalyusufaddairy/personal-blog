import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className="w-screen h-[500px] bg-gradient-to-r from-purple-400 to-yellow-400">
        {/* Navbar in hero */}
        <div className="w-screen h-[77px] bg-transparent px-[42px] flex items-center justify-between">
          <div className="text-[18px] font-900"> NVL</div>
          <div className="w-[300px] h-full  justify-end text-[18px] font-900  flex items-center gap-6">
            <div className="px-[15px] py-[4px] bg-purple-800 text-white rounded-md">
              Contact me
            </div>
          </div>
        </div>
        <div className="w-full  flex">
          <div className="w-[50%] px-[42px] flex flex-col   mt-6 ">
            <div className="flex flex-col  gap-6">
              <span className="font-[500] leading-3">
                {" "}
                HELLO THERE, WELCOME TO MY BLOG
              </span>
              <span className="font-[500] text-3xl leading-3">
                {" "}
                I'm Nauval Yusuf Addairy
              </span>
              <span className="font-[500] text-3xl leading-3">
                {" "}
                A Full Stack <span className=" ">Web Developer</span> &
              </span>
              <span className="font-[500] text-3xl leading-3">
                Certified Cloud Engineer
              </span>
            </div>

            <div className="flex justify-start text-2xl mt-6 gap-3 ">
              <AiFillLinkedin /> <AiFillYoutube />
            </div>
            <div className="flex flex-row gap-6 mt-12">
              <button className="px-[18px] py-[4px] border-[2px] rounded-md  font-[500]">
                Portfolio
              </button>
              <button className="px-[18px] py-[4px] bg-purple-800 text-white rounded-md">
                Hire me
              </button>
            </div>
          </div>
          <div className="w-[50%] h-[300px] "></div>
        </div>
      </div>
    </div>
  );
}
