/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { displayPreview } from "../redux/app";

function Preview({ contentRef }: { contentRef: any }) {
  const { binderName, cards, middleCardOrientation, printPadding } =
    useSelector((state: any) => state.app);
  const dispatch = useDispatch();

  return (
    <div
      className="w-[40%] sm:absolute sm:top-0 sm:left-0 sm:w-screen sm:z-2 h-full lg:w-[45vw] lg:h-[110vh] sm:h-full flex flex-col justify-center border-l-[1px] border-black overflow-clip "
      style={{
        backgroundImage: `url('https://giovannimuzzolini.com/psd-tools/img/checkerboard.jpg')`,
      }}
    >
      <div className="w-full flex justify-end items-center mb-[10px]">
        <img
          src="/images/close.svg"
          className="w-[40px] h-[40px] cursor-pointer"
          alt="close icon"
          onClick={() => dispatch(displayPreview({ display: false }))}
        />
      </div>
      <div
        className="w-[451.5px] smaller:w-screen h-[493.5px] print:scale-x-[1.81] print:scale-y-[2.15] print:top-[17.4rem] print:bottom-0 mx-auto my-auto sm:mt-0 bg-[#a8a8a7] flex flex-col items-center transform origin-center small:scale-90 smaller:scale-75 lg:scale-[0.85] sm:scale-100 relative bottom-6 lg:bottom-20 sm:bottom-0"
        id="print"
        ref={contentRef}
      >
        <img
          src="/images/light.png"
          className="absolute w-full h-full -z-10 top-0 left-0"
        />
        <img
          src="/images/logo.png"
          className="mt-[15px] w-2/5 h-[100px] mb-[13px]"
        />
        <h3 className="font-normal font-alfaSlabOne text-[32px] text-black mb-[30px] min-h-12">
          {binderName}
        </h3>
        <div className="w-full flex px-[40px] pl-[50px] relative left-[8px] xxs:-left-[12px]">
          <div className="w-[120px] h-[160px] bg-[grey] -rotate-[15deg] absolute z-[1] xxs:scale-90">
            {cards[0].src && (
              <img
                src={cards[0].src}
                alt={cards[0].name}
                className="w-full h-full"
              />
            )}
          </div>
          <div
            className={`bg-[grey] absolute z-[2] ${
              middleCardOrientation === "landscape"
                ? "w-[160px] h-[110px] top-[10px] left-[32%] xxs:scale-90"
                : "w-[120px] h-[160px] -top-[10px] left-[35.6%] xxs:scale-90"
            }`}
          >
            {cards[1].src && (
              <img
                src={cards[1].src}
                alt={cards[1].name}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="w-[120px] h-[160px] bg-[grey] rotate-[15deg] absolute z-[3] left-[60%] xxs:scale-90">
            {cards[2].src && (
              <img
                src={cards[2].src}
                alt={cards[2].name}
                className="w-full h-full"
              />
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-44 mb-[20px]">
          <div className="mb-[10px] w-fit flex flex-col items-center">
            <img
              src="images/socials.png"
              className="w-full h-[24px] mb-[10px]"
            />
            <span className="font-helvetica text-[12px] text-black">
              @breakingbinders
            </span>
          </div>
          <div className="w-full bg-black h-[35px] flex items-center justify-center">
            <span
              className={`text-white font-helveticaBold text-[16px] ${
                printPadding ? "pb-[18px]" : ""
              }`}
            >
              www.breakingbinders.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
