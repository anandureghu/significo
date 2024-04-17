import Avatar from "../../../components/avatar/Avatar";

const Slide1 = () => {
  return (
    <div className="h-screen min-w-[100vw] flex justify-center items-center relative">
      <div className="text-[120px] font-pplight">
        Real Talk, <br /> Real Impact
      </div>
      <div className="absolute right-0 translate-x-1/3 z-[1]">
        <Avatar
          url="https://images.unsplash.com/photo-1614495039368-525273956716?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={"350px"}
          height={"350px"}
          position="top"
        />
      </div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="h-screen min-w-[100vw] flex items-center justify-center text-center font-pplight relative">
      <div className="max-w-[50vw]">
        <div className="text-[150px] font-extrabold text-white relative">
          <span>20.4M</span>
          <div className="text-xl absolute w-[300px] text-justify -top-[40px] -left-[30px] text-black">
            We’re on a mission to impact as many lives as possible and build a
            better company while we do it. Here’s our progress.
          </div>
          {/* small avatar */}
          <div className="absolute bottom-0 translate-y-[300px]">
            <Avatar
              url="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={"200px"}
              height={"200px"}
              position="top"
            />
          </div>
        </div>
        <div className="text-5xl leading-[60px] tracking-wide font-semibold">
          Real people — real lives — we have built products and solutions for.
        </div>
      </div>
      {/* top avatar */}
      <div className="absolute top-0 -translate-y-1/3">
        <Avatar
          url="https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={"300px"}
          height={"300px"}
        />
      </div>
      {/* bottom avatar */}
      <div className="absolute bottom-0 translate-y-1/2 translate-x-1/3">
        <Avatar
          url="https://images.unsplash.com/photo-1613498382159-0972b7b4c9f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={"400px"}
          height={"400px"}
        />
      </div>
      {/* right avatar */}
      <div className="absolute right-0 translate-x-1/3">
        <Avatar
          url="https://plus.unsplash.com/premium_photo-1661720137713-a85a195e0b1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={"400px"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

const Slide3 = () => {
  return (
    <div className="h-screen min-w-[100vw] flex items-center justify-center text-center font-pplight relative">
      <div className="max-w-[50vw]">
        <div className="text-[150px] font-extrabold text-white relative">
          <span>49%</span>
          <div className="text-2xl absolute text-left -top-[100px] -left-[450px] text-black font-sans font-normal tracking-tight leading-[40px]">
            Our team is global and diverse, <br />
            because our individual experiences <br />
            make us stronger.
          </div>
          {/* small avatar */}
          <div className="absolute -translate-x-[300px] -bottom-[500px]">
            <Avatar
              url="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.png"
              width={"500px"}
              height={"500px"}
              position="top"
            />
          </div>
        </div>
        <div className="text-5xl tracking-wide font-semibold">
          Expert Women in Tech.
        </div>
      </div>
      {/* top avatar */}
      <div className="absolute top-0 ">
        <Avatar
          url="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.png"
          width={"350px"}
          height={"350px"}
        />
      </div>
      {/* right avatar */}
      <div className="absolute right-0 translate-x-1/3 translate-y-1/3">
        <Avatar
          url="https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.png"
          width={"400px"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

const Slide4 = () => {
  return (
    <div className="h-screen min-w-[100vw] flex items-center justify-center text-center font-pplight relative scroll-hide">
      <div className="max-w-[50vw]">
        <div className="text-[150px] font-extrabold text-white relative">
          <span>13</span>

          {/* small avatar */}
          <div className="absolute bottom-0 -right-[100px] translate-y-[200px]">
            <Avatar
              url="https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={"100px"}
              height={"100px"}
              position="top"
            />
          </div>
        </div>
        <div className="text-5xl leading-[60px] tracking-wide font-semibold">
          Nationalities Represented on Our Team.
        </div>
      </div>
      {/* top avatar */}
      <div className="absolute top-0 -translate-y-1/3 -translate-x-full">
        <Avatar
          url="https://images.unsplash.com/photo-1560419450-a53fe3b90211?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={"250px"}
          height={"250px"}
        />
      </div>
      {/* bottom avatar */}
      <div className="absolute bottom-0 translate-y-[300px] -translate-x-full">
        <Avatar
          url="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={"500px"}
          height={"500px"}
        />
      </div>
      {/* right avatar */}
      <div className="absolute right-0 -top-[100px] translate-x-1/2">
        <Avatar
          url="https://images.unsplash.com/photo-1476888836370-f58a63db75ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={"500px"}
          height={"500px"}
        />
      </div>
    </div>
  );
};

const TalkWithUsSection = () => {
  return (
    <div className="h-[400vh] bg-orange-300 relative">
      <div className="sticky top-0 left-0 flex flex-nowrap overflow-auto scroll-hide scroll-smooth">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </div>
      <button className="sticky top-[calc(100vh-130px)] left-[80px] bg-yellow-200 px-10 py-5 border border-black uppercase font-medium text-xl">
        Partner With Us
      </button>
    </div>
  );
};

export default TalkWithUsSection;
