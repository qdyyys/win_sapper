import footerImage from "../../public/images/footer.a650de3af39c3672822e.webp";
import Star from "./Star";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import MineField from "./MIneFiled";
import Sound from "./Sound";
import SoundOff from "./SoundOff";
import Question from "./Question";
import Wallet from "./Wallet";
import Live from "./Live";
import My from "./My";

const Sapper = () => {
  const [sound, setSound] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [amount, setAmount] = useState(0);
  const [traps, setTraps] = useState(3);
  const maxWin = Math.round(amount * 23.88 * traps);
  const formattedMaxWin = maxWin.toLocaleString("ru-RU");

  const [activeTab, setActiveTab] = useState("live");

  const handleStartGame = () => {
    setIsActive(!isActive);
  };
  const handleAddTraps = () => {
    if (traps > 7) {
      return;
    }
    setTraps(traps + 3);
  };
  const handleDownTraps = () => {
    if (traps <= 3) {
      return;
    }
    setTraps(traps - 3);
  };
  const handleChangeAmount = (event) => {
    const inputValue = event.target.value;
    if (inputValue > 99999999) {
      return;
    }
    if (inputValue === "" || /^[0-9\b]+$/.test(inputValue)) {
      setAmount(inputValue);
    }
  };
  const handleDownAmount = () => {
    if (amount - 10 < 0) {
      return;
    }
    setAmount(amount - 10);
  };
  return (
    <div className="h-screen px-[0px] max-w-full mx-auto flex flex-col items-center relative">
      <div className="wrap_full_game">
        {/* <header className="relative z-50 flex gap-[10px] font-FSElliotPro items-center justify-end mt-[24px]">
          <div className="bg-[#151b2e] rounded-[8px] w-max p-[5px] active:opacity-40 hover:opacity-75 transition duration-75 cursor-pointer">
            {sound ? (
              <SoundOff setSound={setSound} />
            ) : (
              <Sound setSound={setSound} />
            )}
          </div>

          <div className="bg-[#151b2e] rounded-[8px] w-max p-[5px] active:opacity-40 transition duration-75 hover:opacity-75 flex text-white gap-[.25rem] items-center justify-center cursor-pointer">
            <Wallet /> <span className="text-sm">0$</span>
          </div>

          <div className="bg-[#151b2e] rounded-[8px] w-max p-[5px] active:opacity-40 hover:opacity-75 transition duration-75 flex text-white gap-[.25rem] items-center justify-center cursor-pointer">
            <Question /> <span className="text-sm">Как играть</span>
          </div>
        </header> */}

        <MineField isActive={isActive} />
        <div className="bg-[#151b2e] rounded-[1rem] py-[.5rem] px-[1rem] flex justify-between mb-[.75rem]">
          <div className="flex gap-3 items-center">
            <Star />
            <span>
              <p className="text-[.75rem] text-[#13f36c] font-FSElliotPro">
                Макс выигрыш
              </p>
              <p className="text-[.875rem] font-FSElliotProBold text-white">
                {formattedMaxWin} <span className="text-[#858cab]">₽</span>
              </p>
            </span>
          </div>

          <div className="bg-[#0d1121] flex items-center rounded-[.5rem] px-3">
            <IoIosArrowBack
              className="text-[#97a3cb] text-2xl cursor-pointer"
              onClick={handleDownTraps}
            />
            <div className="flex flex-col items-center">
              <p className="font-HalvarBreitBd text-white text-[16px]">
                {traps}
              </p>
              <p className="font-FSElliotPro text-[#97a3cb] text-[12px]">
                Ловушек
              </p>
            </div>
            <IoIosArrowForward
              className="text-[#97a3cb] text-2xl cursor-pointer"
              onClick={handleAddTraps}
            />
          </div>
        </div>

        <div className="bg-[#151b2e] rounded-[1rem] py-[.9rem] px-[1rem] flex justify-between flex-col relative z-50">
        <div className="relative z-50">
  <div className="bg-[#0a0d2c] w-full rounded-[8px] px-[1.25rem] py-2 mb-[.75rem] relative z-20">
    <div className="flex items-center">
      <span
        className="relative text-[#97a3cb] text-xl active:text-[#5b6586] select-none cursor-pointer"
        onClick={handleDownAmount}
      >
        -
        <div className="absolute h-2/3 w-[1px] bg-[#97a3cb]/50 top-1/2 -translate-y-[40%] left-4"></div>
      </span>
      <div className="relative flex-grow">
        <input
          type="text"
          value={amount}
          onChange={handleChangeAmount}
          className="bg-transparent outline-none text-white font-HalvarBreitBd text-center w-full pr-8"
        />
        <span className="absolute right-20 top-0 h-full flex items-center pr-2 text-[#97a3cb] text-xl select-none font-bold font-HalvarBreitTh text-[15px]">₽</span>
      </div>
      <span
        className="relative text-[#97a3cb] text-xl cursor-pointer active:text-[#5b6586] select-none"
        onClick={() => setAmount(Number(amount) + 10)}
      >
        +
        <div className="absolute h-2/3 w-[1px] bg-[#97a3cb]/50 top-1/2 -translate-y-[40%] -left-2"></div>
      </span>
    </div>
  </div>
  <div
    className="py-[.9rem] text-center bg-gradient-to-r from-[#108de7] to-[#0855c4] rounded-[8px] text-white active:opacity-[0.6] transition-opacity duration-75 select-none text-sm cursor-pointer"
    onClick={handleStartGame}
  >
    Играть
  </div>
</div>

        </div>

        <img
            src={footerImage}
            alt=""
            className="absolute top-[85%] max-w-[90000px] -left-[10%] w-screen  z-10"
          />

        {/* <div className="bg-[#151b2e] rounded-[1rem] px-[20px] flex flex-col text-white w-full mt-[15px] mb-[50px]">
          <div className="flex justify-between border-b border-white/10 py-[.9rem]">
            <span className="font-HalvarBreitBlk flex items-center gap-[.25rem]">
              <Star size={23} />
              <span className="text-[18px]">CAVEMINES</span>
            </span>

            <div className="text-[13px] font-FSElliotProBold py-[15px]">
              <span
                className={`rounded-[8px] px-[15px] py-[10px] cursor-pointer select-none ${
                  activeTab === "live" ? "active_tab" : null
                }`}
                onClick={() => setActiveTab("live")}
              >
                Live
              </span>

              <span
                className={`rounded-[8px] px-[15px] py-[10px] cursor-pointer select-none ${
                  activeTab === "my" ? "active_tab" : null
                }`}
                onClick={() => setActiveTab("my")}
              >
                Мои
              </span>
            </div>
          </div>

          {activeTab === "live" ? <Live /> : <My />}
        </div> */}
      </div>
    </div>
  );
};
export default Sapper;
