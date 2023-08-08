import Logo from "../../assets/images/logo-white.svg";
import styleFooter from "./styleFooter.module.css";

export default function Footer() {
  return (
    <div className="bg-blue-300 pt-[34px] px-[30px] pb-[7rem] relative">
      <div className="container">
        <img src={Logo} alt="logo company" />
        <div className="mt-6 bg-white py-[25px] px-[27px]">
          <select className="appearance-none bg-icon-select bg-no-repeat bg-[center_right_1rem] uppercase border border-gray-300 text-blue-100 font-bold text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option>Technology Department</option>
            <option>Marketing Department</option>
            <option>Customer Care Department</option>
          </select>
          <address className="not-italic text-[#25A0D8] mt-[40px] text-lg">
            Jl. Lembong No 8 <br /> Kel. Braga Kec. Sumur <br /> Bandung, Kota{" "}
            <br /> Bandung, Jawa Barat
          </address>
        </div>
        <ul className="text-white grid gap-4 relative z-10 mt-6">
          <li>
            <a href="/" className="text-base py-1 inline-block">
              Who We Are
            </a>
          </li>
          <li>
            <a href="/" className="text-base py-1 inline-block">
              Our Values
            </a>
          </li>
          <li>
            <a href="/" className="text-base py-1 inline-block">
              The Perks
            </a>
          </li>
        </ul>
        <div className={styleFooter.triangelWrapperUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={styleFooter.triangelUp}
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="fill-blue-200"
            ></path>
          </svg>
        </div>
        <div className={styleFooter.triangelWrapperBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={styleFooter.triangelBack}
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="fill-blue-500"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
