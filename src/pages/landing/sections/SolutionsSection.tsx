import { MdArrowOutward } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { PiHandshakeThin } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { SlGraph } from "react-icons/sl";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Driven by Purpose",
      description:
        "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale.",
      icon: <IoDiamondOutline size={200} />,
    },
    {
      title: "Custom Products",
      description:
        "We build mobile and web-based apps, platforms, and infrastructure fitted to your needs. We have an open solutions framework, so we work to fit your business, not the other way around.",
      icon: <SlGraph size={200} />,
    },
    {
      title: "Partnerships",
      description:
        "We work with payers, providers, and pharma to help internal teams through ground-up builds, product optimizations, and streamlining data/analytics.",
      icon: <PiHandshakeThin size={200} />,
    },
    {
      title: "Security & Compliance",
      description:
        "Not just technology experts. Health experts. We are able to navigate both stringent regulatory environments and the  complexities of technology and data.",
      icon: <GoShieldCheck size={200} />,
    },
  ];
  return (
    <section data-theme="aqua" className="h-[fit-content]">
      <div className="pl-[50px] relative">
        <div className="sticky top-0 w-1/2 h-screen  pt-[100px] ">
          <p className="text-[21px] w-[90%]">
            Significo is a custom health software developer founded on the
            belief that technology can transform healthcare to put people first.
            We put humanity back at the center of healthcare by simplifying
            complexity, accelerating capacity, and improving outcomes.
          </p>
          <h1 className="text-[90px] font-pplight leading-[120px] mt-[30px]">
            We Craft <br />
            Human-Centric Health Software
          </h1>
          <button className="border-black border px-[40px] py-[20px] flex items-center gap-3 mt-[40px]">
            <p>OUR SOLUTIONS</p>
            <MdArrowOutward size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-8 pr-[270px] w-1/2 ml-[50%] pb-[100vh]">
          {solutions.map((solution, i) => {
            return (
              <div
                key={`solutions-solution-${i + 1}`}
                className="px-[40px] py-[20px] border-black border flex items-center gap-28 pr-[100px]"
              >
                <div>
                  <h2 className="font-medium text-2xl mb-4">
                    {solution.title}
                  </h2>
                  <p>{solution.description}</p>
                </div>
                {solution.icon}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
