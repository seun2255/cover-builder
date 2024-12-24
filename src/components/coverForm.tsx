/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  displayGallery,
  displayPreview,
  setBinderName,
  switchOrientation,
  setPrintPadding,
} from "../redux/app";
import html2canvas from "html2canvas";
import { useReactToPrint } from "react-to-print";

function CoverForm({ contentRef }: { contentRef: any }) {
  const [selectedField, setSelectedField] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { binderName, cards, middleCardOrientation } = useSelector(
    (state: any) => state.app
  );
  const dispatch = useDispatch();
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handleSaveImage = async () => {
    dispatch(setPrintPadding({ display: true }));
    dispatch(displayPreview({ display: true }));
    setTimeout(async () => {
      const element = document.getElementById("print");
      if (element) {
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/jpg");
        const link = document.createElement("a");

        link.href = data;
        link.download = "cover.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        dispatch(setPrintPadding({ display: false }));
      }
    }, 100);
  };

  const handlePrint = () => {
    dispatch(displayPreview({ display: true }));
    setTimeout(() => {
      reactToPrintFn();
    }, 100);
  };

  return (
    <div className="flex-1 h-full max-h-[640px] lg:p-2 sm:p-0 sm:h-fit sm:max-w-[36rem] sm:w-1/2 sm:mx-auto my-auto flex items-center justify-center">
      <div className="w-[600px] h-[90%] sm:w-[98%] sm:h-[96%] rounded-[20px] border-black border-[2px] flex flex-col items-center py-[25px]">
        <h3 className="font-bold text-[26px] text-black mb-[20px]">
          Build your cover
        </h3>
        <div className="w-full sm:flex-1">
          <div className="w-full">
            <div
              className="w-full px-[20px] py-[10px] font-medium text-[22px] sm:text-[16px] border-y-black border-y-[1px] cursor-pointer"
              onClick={() => setSelectedField(1)}
            >
              Binder Name
            </div>
            {selectedField === 1 && (
              <div className="w-full px-[20px] py-[10px]">
                <input
                  type="text"
                  className="w-[300px] text-[17px] font-normal rounded-[4px] p-[4px] border-[1px] border-black outline-none"
                  value={binderName}
                  onChange={(e) =>
                    dispatch(setBinderName({ text: e.target.value }))
                  }
                />
              </div>
            )}
          </div>
          <div className="w-full">
            <div
              className="w-full px-[20px] py-[10px] font-medium text-[22px] sm:text-[16px] border-y-black border-y-[1px] cursor-pointer"
              onClick={() => setSelectedField(2)}
            >
              Cards
            </div>
            {selectedField === 2 && (
              <div className="flex flex-col w-full items-center">
                <img
                  src="/images/switch-orientation.svg"
                  alt="switch icon"
                  className="w-[25px] h-[25px] mt-[10px] cursor-pointer"
                  onClick={() => dispatch(switchOrientation())}
                />
                <div className="w-full px-[20px] pb-[10px] pt-[10px] flex justify-between">
                  {cards.map((card: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          index === 1 && middleCardOrientation === "landscape"
                            ? "w-[160px] h-[90px] sm:w-[120px] sm:h-[60px]"
                            : "w-[110px] h-[160px] sm:w-[80px] sm:h-[120px]"
                        } bg-[grey] cursor-pointer`}
                        onClick={() =>
                          dispatch(displayGallery({ display: true, index }))
                        }
                      >
                        {card.src && (
                          <img
                            src={card.src}
                            alt={card.name}
                            className="w-full h-full"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full px-[20px] sm:mt-24 flex justify-between mt-auto">
          <button
            className="font-medium text-[16px] sm:text-[13px] w-[110px] sm:w-fit px-4 py-[7px] sm:py-[5px] text-white bg-[blue] text-center "
            onClick={() => dispatch(displayPreview({ display: true }))}
          >
            Preview
          </button>
          <div className="flex gap-[10px]">
            <button
              className="font-medium text-[16px] sm:text-[13px] w-[100px] sm:w-[70px] py-[7px] sm:py-[5px] text-white bg-[#5e4e4e] text-center"
              onClick={handleSaveImage}
            >
              Save
            </button>
            <button
              className="font-medium text-[16px] sm:text-[13px] w-[100px] sm:w-[70px] py-[7px] sm:py-[5px] text-white bg-[black] text-center"
              onClick={handlePrint}
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverForm;
