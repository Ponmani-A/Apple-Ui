import { useState } from "react";
import safari from "../../assets/store-iphone.png";
import photos from "../../assets/store-ipad.png";
import imovie from "../../assets/store-watch.png";
import garageband from "../../assets/store-airpods.png";
import pages from "../../assets/store-airtag.png";
import numbers from "../../assets/store-tv.png";
import keynote from "../../assets/store-homepod.png";
import logic from "../../assets/store-mac.png";
import mainstage from "../../assets/store-iphone.png";
import finalcut from "../../assets/store-ipad.png";
import motion from "../../assets/store-watch.png";
import compressor from "../../assets/store-accessories.png";
import appStore from "../../assets/Apple.png";
import builtInImage from "../../assets/macbook.jpg";
import proImage from "../../assets/latest-macbook.jpg";

// Tab name -> andha tab la kaattura text
const builtInText = {
  Safari:
    "Safari has innovative features that let you enjoy more of the web. In even more ways. Built-in privacy features help protect your information and keep your Mac secure. An updated start page helps you easily and quickly save, find, and share your favorite sites. And Siri suggestions surface bookmarks, links from your reading list, iCloud Tabs, links you receive in Messages, and more.",
  Photos:
    "Photos helps you find, organize, and relive your favorite moments. Powerful editing tools let you make your photos and videos look their best, and iCloud Photos keeps your entire library up to date and available on all your devices.",
  iMovie:
    "iMovie makes it easy to turn your videos into stunning movies and Hollywood-style trailers. Choose from ready-made templates, add titles, music, and effects, and share your finished film with the world.",
  GarageBand:
    "GarageBand turns your Mac into a complete recording studio. Play, record, and mix music with a huge collection of instruments, loops, and sounds, even if you’ve never made music before.",
  Pages:
    "Pages helps you create beautiful documents, from reports and résumés to posters and books. Start with a stunning template, add photos and charts, and collaborate with others in real time.",
  Numbers:
    "Numbers makes it easy to create gorgeous spreadsheets. Start with a template, add tables, charts, and formulas, and work together with others in real time.",
  Keynote:
    "Keynote makes it easy to create and present stunning presentations. Start with a polished theme, add animations and transitions, and collaborate with others in real time.",
};

const proText = {
  "Logic Pro":
    "Logic Pro puts a complete recording and MIDI production studio on your Mac, with everything you need to write, record, edit, and mix like never before. And with a huge collection of full-featured plug-ins along with thousands of sounds and loops, you’ll have everything you need to go from first inspiration to final master, no matter what kind of music you want to create.",
  MainStage:
    "MainStage turns your Mac into a powerful live performance rig. Play software instruments, use effects, and control everything on stage with a customizable layout built for the way you perform.",
  "Final Cut Pro":
    "Final Cut Pro is a powerful video editor built for the Mac. Edit, color grade, and finish projects with a fast, flexible timeline and professional tools that help you bring your story to life.",
  Motion:
    "Motion lets you create cinematic 2D and 3D titles, transitions, and effects for Final Cut Pro. Design with real-time previews and flexible tools to bring motion graphics to life.",
  Compressor:
    "Compressor adds powerful encoding options to Final Cut Pro, Motion, and Logic Pro. Customize your output, deliver in a wide range of formats, and speed up your workflow.",
};

const builtInTabs = [
  { name: "Safari", icon: safari },
  { name: "Photos", icon: photos },
  { name: "iMovie", icon: imovie },
  { name: "GarageBand", icon: garageband },
  { name: "Pages", icon: pages },
  { name: "Numbers", icon: numbers },
  { name: "Keynote", icon: keynote },
];

const proTabs = [
  { name: "Logic Pro", icon: logic },
  { name: "MainStage", icon: mainstage },
  { name: "Final Cut Pro", icon: finalcut },
  { name: "Motion", icon: motion },
  { name: "Compressor", icon: compressor },
];

function AppsTabs() {
  const [builtIn, setBuiltIn] = useState("Safari");
  const [pro, setPro] = useState("Logic Pro");

  return (
    <section className="mx-auto max-w-[1200px] space-y-4 px-4 pt-4">
      <div className="bg-[#fbfbfd] px-4 py-12 text-center">
        <h2 className="text-[28px] font-semibold md:text-[40px]">
          Built-in Apps
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-xs">
          Powerful creativity and productivity tools live inside every Mac —
          apps that help you explore, connect, and work more efficiently.
        </p>

        <div className="no-scrollbar mx-auto mt-8 flex max-w-[640px] justify-between gap-4 overflow-x-auto border-b border-[#d2d2d7]">
          {builtInTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setBuiltIn(tab.name)}
              className={`flex shrink-0 flex-col items-center gap-1 border-b-2 px-2 pb-2 text-xs ${
                builtIn === tab.name
                  ? "border-black text-black"
                  : "border-transparent text-[#6e6e73]"
              }`}
            >
              <img src={tab.icon} alt="" className="h-8 w-8 object-contain" />
              {tab.name}
            </button>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[480px] text-xs leading-relaxed">
          {builtInText[builtIn]}
        </p>
        <a href="#" className="mt-3 block text-xs text-[#06c] hover:underline">
          Learn more about {builtIn}
        </a>
        <img
          src={builtInImage}
          alt="Built-in apps"
          className="mx-auto mt-10 w-full max-w-[540px]"
        />
      </div>

      <div className="bg-[#fbfbfd] px-4 py-12 text-center">
        <h2 className="text-[28px] font-semibold md:text-[40px]">Pro Apps</h2>
        <p className="mx-auto mt-3 max-w-[560px] text-xs">
          For professionals ready to push their creativity, these
          industry-leading apps offer maximum control over editing, processing,
          and output of music and film.
        </p>

        <div className="no-scrollbar mx-auto mt-8 flex max-w-[520px] justify-between gap-4 overflow-x-auto border-b border-[#d2d2d7]">
          {proTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setPro(tab.name)}
              className={`flex shrink-0 flex-col items-center gap-1 border-b-2 px-2 pb-2 text-xs ${
                pro === tab.name
                  ? "border-black text-black"
                  : "border-transparent text-[#6e6e73]"
              }`}
            >
              <img src={tab.icon} alt="" className="h-8 w-8 object-contain" />
              {tab.name}
            </button>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[480px] text-xs leading-relaxed">
          {proText[pro]}
        </p>
        <a href="#" className="mt-3 block text-xs text-[#06c] hover:underline">
          Learn more about {pro}
        </a>
        <img
          src={proImage}
          alt="Pro apps"
          className="mx-auto mt-10 w-full max-w-[480px]"
        />

        <div className="mx-auto mt-10 flex max-w-[560px] items-center gap-4 border-t border-[#d2d2d7] pt-6 text-left text-xs">
          <img src={appStore} alt="" className="h-10 w-10" />
          <p>
            The Mac App Store features rich editorial content and great apps for
            Mac.
          </p>
          <a href="#" className="text-[#06c] hover:underline">
            Explore the Mac App Store
          </a>
        </div>
      </div>
    </section>
  );
}

export default AppsTabs;
