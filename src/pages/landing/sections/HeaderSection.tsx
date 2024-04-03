import { IoIosArrowRoundDown } from "react-icons/io";
import { getRandomArbitrary } from "../../../main/utils";

const HeaderSection = () => {
  const headerScollingItems = [
    "intuitive",
    "useful",
    "empathetic",
    "intuitive",
    "useful",
    "empathetic",
    "intuitive",
    "useful",
    "empathetic",
  ];

  const images = [
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
  ];

  return (
    <header className="relative">
      <nav className="absolute top-[50px] px-[100px] w-full text-white flex justify-between items-center">
        <div className="logo text-4xl font-pplight">Significo</div>
        <ul className="list-none flex gap-8 items-center font-3xl tracking-wider">
          <li>Solutions</li>
          <li>About</li>
          <li>Insights</li>
          <li>Team</li>
          <li>Careers</li>
          <li className="bg-yellow-100 text-black px-[20px] py-[10px] rounded font-medium">
            Contact Us
          </li>
        </ul>
      </nav>
      <section className="h-screen overflow-hidden">
        <video muted autoPlay crossOrigin="anonymous" loop playsInline>
          <source
            src="https://xgjzloifyvgpbmyonaya.supabase.co/storage/v1/object/public/files/bBj1XfrSyi/1ENIoa5sjq"
            type="video/mp4"
          />
        </video>
      </section>
      <section
        data-theme="dark"
        className="absolute top-0 left-0 overflow-hidden flex flex-col items-center justify-between"
      >
        <p className="text-3xl w-[500px] text-center leading-[50px] font-pplight tracking-wide absolute top-[70px]">
          Crafting a new paradigm of healthcare, one that is
        </p>
        <div className="font-ppmedium text-7xl absolute top-1/2 -translate-y-1/2 ">
          <div
            className={`flex gap-20 tracking-wide relative transform translate-x-[100px]`}
          >
            {headerScollingItems.map((item) => {
              return (
                <div className="flex items-center gap-2">
                  <img
                    className="w-[50px] height-[50px]"
                    src={images[getRandomArbitrary(0, images.length - 1)]}
                    alt={item}
                  />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
          <div
            className={`flex  gap-20 tracking-wide relative transform translate-x-[50}px]`}
          >
            {headerScollingItems.map((item) => {
              return (
                <div className="flex items-center gap-2">
                  <img
                    className="w-[50px] height-[50px]"
                    src={images[getRandomArbitrary(1, images.length - 1)]}
                    alt={item}
                  />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
          <div
            className={`flex  gap-20 tracking-wide relative transform translate-x-[150px]`}
          >
            {headerScollingItems.map((item) => {
              return (
                <div className="flex items-center gap-2">
                  <img
                    className="w-[50px] height-[50px]"
                    src={images[getRandomArbitrary(1, images.length - 1)]}
                    alt={item}
                  />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
          <div
            className={`flex  gap-20 tracking-wide relative transform translate-x-[-50px]`}
          >
            {headerScollingItems.map((item) => {
              return (
                <div className="flex items-center gap-2">
                  <img
                    className="w-[50px] height-[50px]"
                    src={images[getRandomArbitrary(1, images.length - 1)]}
                    alt={item}
                  />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full px-[100px] tracking-wide font-pplight flex items-center justify-between absolute bottom-[100px] text-white">
        <div>
          <p>We build big ideas.</p>
          <p>Software. Apps. Tools.</p>
          <p>For real people. Real lives.</p>
        </div>
        <div className="relative">
          <div className="w-[80px] h-[80px] absolute right-[50px] -bottom-[50px] border-white border rounded-full">
            <span className="absolute top-1/2 -translate-y-1/2 translate-x-1/4">
              <IoIosArrowRoundDown size={50} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
