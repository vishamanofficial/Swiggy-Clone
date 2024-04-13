import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="  flex justify-between shadow-lg">
      <div className="ml-[50px] mt-2">
        <Link to="/">
          {" "}
          <img className="w-11 items-center  " src={LOGO_URL} />{" "}
        </Link>
      </div>
      <div className=" mr-[40px] flex items-center">
        <ul className="flex p-3 text-lg">
          <li className="p-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4">
            <Link to="/">
              <span className="text-[#FF9119] pr-2">
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </Link>
          </li>

          <li className="p-4">
            <Link
              target="_blank"
              to="https://vishamanofficial.github.io/Portfolio/"
            >
              <span className="text-[#FF9119] pr-2">
                <i class="fa-regular fa-handshake"></i>
              </span>
              Contact Me
            </Link>
          </li>

          <li className="p-4">
            <span className="text-[#FF9119] pr-2">
              <i class="fa-solid fa-person-dots-from-line"></i>
            </span>
            Takeaway
          </li>

          <li className="p-4">
            <span className="text-[#FF9119] pr-2">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            Cart
          </li>
          <button
            className="items-center text-white bg-[#FF9119] hover:shadow-md rounded-lg text-lg px-4 mt-2 mb-2 ml-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
