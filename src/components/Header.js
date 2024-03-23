import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // hm yaha pe useState ka use krke login logout button bana rahe hain
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array is present then then useEffect is called on every render
  // if empty dependency array is present then useEffect is called only on initial render (just once)
  // is something present in depencey array as a dependency then useEffect is called everytime that dependency is updated

  // useEffect( ()=>{
  //     console.log("useEffect callled");
  // }, [btnNameReact]);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="  flex justify-between shadow-lg">
      <div className="ml-[50px] mt-2">
        <Link to="/">
          {" "}
          <img className="w-11 items-center  " src={LOGO_URL} />{" "}
        </Link>
      </div>
      {/* <div className="flex items-center ml-[-300px]">
                <p className="">Lucknow, Uttar Pradesh</p>
            </div> */}
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

// yaha se export karenge tabhi app.js me import kr payenge
export default Header;
