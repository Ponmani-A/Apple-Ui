import appleLogo from "../../assets/Apple.png";
import rihanna from "../../assets/music-rihanna.jpg";
import favesPhone from "../../assets/music-faves-phone.jpg";
import radioPhone from "../../assets/music-radio-phone.jpg";
import singIpad from "../../assets/music-sing-ipad.jpg";
import carplay from "../../assets/music-carplay.jpg";
import listenPhone from "../../assets/music-listennow-phone.jpg";
import playlists from "../../assets/music-playlists.jpg";
import live from "../../assets/music-live.jpg";

const card = "relative overflow-hidden rounded-[14px] bg-white";
const title = "text-[17px] font-semibold leading-[1.35] text-[#1d1d1f]";
const desc = "text-[17px] font-semibold leading-[1.35] text-[#6e6e73]";
const phoneImg =
  "mx-auto mt-8 w-[200px] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[231px] lg:-translate-x-1/2";

function MusicFeatures() {
  return (
    <section className="bg-[#f5f5f7] px-4 pb-[80px] pt-[80px] lg:pb-[152px] lg:pt-[152px]">
      <h2 className="text-center text-[32px] font-semibold leading-[1.14] sm:text-[44px] lg:text-[56px] lg:leading-[64px]">
        Listen and discover.
        <br />
        In perfect harmony.
      </h2>

      <div className="mx-auto mt-[40px] grid max-w-[822px] gap-x-5 gap-y-[30px] md:grid-cols-2 lg:mt-[73px]">
        <div className={`${card} h-[420px] md:col-span-2 lg:h-[515px]`}>
          <img
            src={rihanna}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 text-white lg:bottom-auto lg:left-[63%] lg:right-auto lg:top-[157px] lg:w-[256px]">
            <p className="text-[17px] font-semibold leading-[1.35]">
              Immerse yourself in lossless and Spatial Audio.
            </p>
            <p className="mt-3 text-[17px] font-semibold leading-[1.35] text-white/75">
              Hear sound all around you in Spatial Audio with Dolby Atmos — now
              including Rihanna’s iconic hits.1 And unlock amazing definition
              with lossless audio.
            </p>
          </div>
        </div>

        <div className={`${card} p-8 lg:h-[594px] lg:p-10`}>
          <p className={title}>Favorite all your faves.</p>
          <p className={desc}>
            Get automatic updates about new releases and even better
            recommendations when you star your top artists.
          </p>
          <img src={favesPhone} alt="" className={phoneImg} />
        </div>
        <div className={`${card} p-8 lg:h-[594px] lg:p-10`}>
          <p className={title}>Tune in to top shows on live radio.</p>
          <p className={desc}>
            Zane Lowe chats with world-renowned artists, Ebro plays hip-hop with
            a side of social justice, and Dotty delivers global Black music
            culture.
          </p>
          <a
            href="#"
            className="mt-3 block text-[14px] text-[#06c] hover:underline"
          >
            Listen live for free3
          </a>
          <img src={radioPhone} alt="" className={phoneImg} />
        </div>

        <div className={`${card} md:col-span-2 lg:h-[460px]`}>
          <img
            src={singIpad}
            alt=""
            className="w-full lg:absolute lg:left-0 lg:top-[45px] lg:w-[386px]"
          />
          <div className="p-8 lg:absolute lg:left-[449px] lg:top-1/2 lg:w-[310px] lg:-translate-y-1/2 lg:p-0">
            <p className={title}>Sing along with Apple Music Sing.4</p>
            <p className={desc}>
              New lyrics features make it more fun to hit every beat. Sing top
              songs with real-time lyrics and adjustable vocals that let you
              take the lead, duet with the artist, or belt out backup harmonies.
            </p>
          </div>
        </div>

        <div className={`${card} h-[400px] md:col-span-2 lg:h-[460px]`}>
          <img
            src={carplay}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 text-white lg:bottom-auto lg:left-10 lg:right-auto lg:top-[174px] lg:w-[260px]">
            <p className="text-[17px] font-semibold leading-[1.35]">
              Take your tunes for a drive with CarPlay.
            </p>
            <p className="mt-3 text-[17px] font-semibold leading-[1.35] text-white/80">
              Hit the road with Apple Music and just ask Siri to play your
              favorites.
            </p>
          </div>
        </div>

        <div className={`${card} p-8 lg:h-[559px] lg:p-10`}>
          <p className={title}>Explore new sounds on Listen Now.</p>
          <p className={desc}>
            Discover more music you’ll love based on what you’re already
            listening to.
          </p>
          <img src={listenPhone} alt="" className={phoneImg} />
        </div>
        <div className={`${card} p-8 lg:h-[559px] lg:p-10`}>
          <p className={title}>Browse playlists for your every mood.</p>
          <p className={desc}>
            Tap into our editors’ picks with thousands of curated and
            personalized playlists.
          </p>
          <img
            src={playlists}
            alt=""
            className="mx-auto mt-8 w-[220px] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[284px] lg:-translate-x-1/2"
          />
        </div>

        <div
          className={`${card} h-[400px] text-white md:col-span-2 lg:h-[459px]`}
        >
          <img
            src={live}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 flex h-full flex-col p-6 lg:p-10">
            <span className="flex items-center gap-1 text-[22px] font-semibold">
              <img src={appleLogo} alt="" className="h-[18px] w-auto" />
              Music
              <span className="ml-1 rounded-full border border-white px-3 py-0.5 text-[16px]">
                LIVE
              </span>
            </span>
            <div className="mt-auto lg:mt-[44px] lg:max-w-[285px]">
              <p className="text-[17px] font-semibold leading-[1.35]">
                Get the best seat in the house with Apple Music Live.
              </p>
              <p className="mt-3 text-[17px] font-semibold leading-[1.35] text-white/75">
                Watch our ongoing concert series featuring exclusive
                performances recorded in real time. Only on Apple Music.
              </p>
            </div>
            <p className="mt-4 text-[13px] font-semibold lg:mt-auto">
              Billie Eilish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MusicFeatures;
