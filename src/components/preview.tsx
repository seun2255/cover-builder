/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { displayPreview } from "../redux/app";

function Preview({ contentRef }: { contentRef: any }) {
  const { binderName, cards, middleCardOrientation } = useSelector(
    (state: any) => state.app
  );
  const dispatch = useDispatch();

  return (
    <div
      className="w-[40%] sm:absolute sm:top-0 sm:left-0 sm:w-screen smaller:w-[120vw] sm:z-2 h-full smaller:h-[120vh] xxs:w-[130vw] xxs:h-[130vh] lg:w-[45vw] lg:h-[110vh] sm:h-full flex flex-col justify-center border-l-[1px] border-black overflow-clip "
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
        className="w-[451.5px] h-[493.5px] mx-auto my-auto sm:mt-0 bg-[#a8a8a7] flex flex-col items-center transform origin-center small:scale-90 xxs:scale-[0.8] lg:scale-[0.85] sm:scale-100 relative bottom-6 lg:bottom-20 sm:bottom-0"
        id="print"
        ref={contentRef}
      >
        <img
          src="/images/light.png"
          className="absolute w-full h-full -z-10 top-0 left-0"
        />
        <img
          src="/images/logo.png"
          className="mt-[40px] w-2/5 h-[100px] mb-[13px]"
        />
        <h3 className="font-normal font-alfaSlabOne text-[32px] text-black mb-[30px] min-h-12">
          {binderName}
        </h3>
        <div className="w-full flex px-[40px] pl-[50px] relative left-[8px]">
          <div className="w-[120px] h-[160px] bg-[grey] -rotate-[15deg] absolute z-[1]">
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
                ? "w-[160px] h-[110px] top-[10px] left-[32%]"
                : "w-[120px] h-[160px] -top-[10px] left-[35.6%]"
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
          <div className="w-[120px] h-[160px] bg-[grey] rotate-[15deg] absolute z-[3] left-[60%]">
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
          <div className="w-full bg-black text-white font-helveticaBold text-[16px] text-center py-[6px]">
            www.breakingbinders.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
