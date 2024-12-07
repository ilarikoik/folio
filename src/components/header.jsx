import { useRef } from "react";
export default function Header() {
  return (
    <div className=" flex flex-col h-15 justify-center items-center sm:flex-row ">
      <div className="mt-3 w-full flex justify-center items-center sm:justify-start sm:ml-5">
        <h1 className=" bg-olive p-3 text-xl font-bold text-custom-beige rounded-md">
          IK
        </h1>
      </div>
      <div className=" w-4/6">
        <ul className="flex flex-row justify-around items-center text-olive font-bold ">
          <li className="w-fit cursor-pointer m-2 hover:text-teal-600">
            PROJEKTIT
          </li>
          <li className="w-fit cursor-pointer m-2 hover:text-teal-600">
            KURSSIT
          </li>
          <li className="w-fit cursor-pointer m-2 hover:text-teal-600">
            TYÖHISTORIA
          </li>
        </ul>
      </div>
    </div>
  );
}
