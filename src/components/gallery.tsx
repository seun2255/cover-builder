/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { displayGallery } from "../redux/app";
import { setCard } from "../redux/app";
import cards from "../cards.json";

function Gallery() {
  const { cardIndex } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();

  function isMobileViewport() {
    return window.innerWidth < 767;
  }

  return (
    <div
      className="w-[40%] sm:absolute sm:top-0 sm:left-0 sm:w-full sm:z-2 h-full border-l-[1px] border-black p-[20px] flex flex-col"
      style={{
        backgroundImage: `url('https://giovannimuzzolini.com/psd-tools/img/checkerboard.jpg')`,
      }}
    >
      <div className="w-full flex justify-between items-center mb-[20px]">
        <h2 className="font-bold text-[26px]">Select a Trading Card</h2>
        <img
          src="/images/close.svg"
          className="w-[40px] h-[40px] cursor-pointer"
          alt="close icon"
          onClick={() => dispatch(displayGallery({ display: false, index: 0 }))}
        />
      </div>
      <div className="w-full flex-1 grid grid-cols-4 gap-[2px] overflow-y-scroll scrollbar">
        {cards.map((card: any, index: number) => {
          {
            return (
              <img
                key={index}
                src={card.src}
                alt={card.name}
                className="cursor-pointer"
                onClick={() => {
                  dispatch(setCard({ image: card, index: cardIndex }));
                  if (isMobileViewport())
                    dispatch(
                      displayGallery({ display: false, index: cardIndex })
                    );
                }}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Gallery;
