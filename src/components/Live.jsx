import React, { useState, useEffect } from "react";
import Coin from "../../public/images/coin.png";

const Live = () => {
  const isEven = (num) => num % 2 === 0;
  const getRandomName = () => {
    const names = [
      "Саша",
      "Jane",
      "Roanokay",
      "AgentLost",
      "Alkanoid",
      "Outriggr",
      "Александр",
      "xfe3",
      "oo3f",
      "niger",
    ];
    return `${names[Math.floor(Math.random() * names.length)]}${Math.floor(
      Math.random() * 100
    )}`;
  };

  const getRandomAmount = () =>
    Math.floor(Math.random() * (15000 - 50 + 1)) + 50;
  const getRandomCoefficient = () =>
    Math.floor(Math.random() * (95 - 1 + 1)) + 1;
  const getRandomWin = () =>
    Math.floor(Math.random() * (99999 - 100 + 1)) + 100;

  const generateRandomUser = () => ({
    name: getRandomName(),
    amount: getRandomAmount(),
    coefficient: getRandomCoefficient(),
    win: getRandomWin(),
  });

  const [users, setUsers] = useState(() =>
    Array.from({ length: 25 }, generateRandomUser)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUsers(Array.from({ length: 25 }, generateRandomUser));
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="flex justify-around mt-[10px] text-[11px] font-FSElliotPro">
        <span>Игрок</span>
        <span>Ставка</span>
        <span>Кэф</span>
        <span>Выигрыш</span>
      </div>

      <div className="mt-[11px]">
        <div className="mt-[5px] max-h-[390px] overflow-hidden">
          {users.map((user, index) => (
            <div
              key={index}
              className={`flex justify-between text-[11px] font-FSElliotPro py-2 gap-8 rounded-lg ${
                isEven(index) ? "bg-[#1b233a]" : null
              }`}
            >
              <div className="flex w-1/2 justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={Coin} alt="" className="max-w-[27px]" />
                  <span className="text-[#4d5670]">{user.name}</span>
                </div>
                <span className="flex text-[#95a0c6] font-FSElliotProBold">
                  {user.amount}
                </span>
              </div>

              <div className="flex justify-between w-1/2 items-center px-3">
                <span className="text-[#95a0c6] font-FSElliotProBold">
                  {user.coefficient}
                </span>
                <span className="text-[#17c655] font-FSElliotProBold">
                  {user.win} ₽
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;
