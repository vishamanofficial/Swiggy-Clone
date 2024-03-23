const Footer = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center bg-slate-100">
        <div>
          <h4 className="text-4xl ml-[150px] font-bold mr-16">
            For better experience, download the Swiggy app now
          </h4>
        </div>
        <div className="flex p-4">
          <div>
            <img
              className="w-[280px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            ></img>
          </div>
          <div>
            <img
              className="w-[230px] mr-[150px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            ></img>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly bg-black py-16">
        <div>
          <div className="flex">
            <span>
              <img
                className="w-10"
                src="https://companieslogo.com/img/orig/swiggy.D-27748b7c.png?t=1699336580"
              ></img>
            </span>
            <span className="text-[40px] p-2 text-white font-bold">Swiggy</span>
          </div>
          <div>
            <span className="text-white text-2xl ">© 2023 Tech. Pvt. Ltd</span>
          </div>
        </div>
        <div className="text-white">
          <h5 className="text-2xl font-semibold pb-4">Company</h5>
          <ul>
            <li className="text-xl py-1">About</li>
            <li className="text-xl py-1">Careers</li>
            <li className="text-xl py-1">Team</li>
            <li className="text-xl py-1">Swiggy One</li>
            <li className="text-xl py-1">Swiggy Instamart</li>
            <li className="text-xl py-1">Swiggy Genie</li>
          </ul>
        </div>
        <div className="text-white">
          <h5 className="text-2xl font-semibold pb-4">Contact us</h5>
          <ul>
            <li className="text-xl py-1">Help & Support</li>
            <li className="text-xl py-1">Partner with us</li>
            <li className="text-xl py-1">Ride with us</li>
          </ul>
          <div className="text-white">
            <h5 className="text-2xl font-semibold py-4">Legal</h5>
            <ul>
              <li className="text-xl py-1">Trems and Conditions</li>
              <li className="text-xl py-1">Cookie Policy</li>
              <li className="text-xl py-1">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-white">
          <h5 className="text-2xl font-semibold pb-4">We deliver to:</h5>
          <ul>
            <li className="text-xl py-1">Lucknow</li>
            <li className="text-xl py-1">Jaunpur</li>
            <li className="text-xl py-1">Banglore</li>
            <li className="text-xl py-1">Gurgaon</li>
            <li className="text-xl py-1">Hydrabad</li>
            <li className="text-xl py-1">Delhi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
