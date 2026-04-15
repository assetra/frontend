const Work = () => {
  return (
    <section className="relative flex justify-center px-4 pt-20 pb-16 min-h-screen overflow-hidden">
      <div className="absolute inset-0 animate-gradient-xy" />

      <div className="absolute inset-0 opacity-30" />

      <div className="relative max-w-[1280px] w-full z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1
            className="text-white/90 title mx-auto leading-relaxed font-light"
            style={{ textAlign: "center" }}
          >
            Partner with Assetra to drive innovation in the digital asset space.
            Let’s work together to expand opportunities. Reach out to us for
            more information.
          </h1>
        </div>

        <div className="word-img flex">
          <img src="/assets/work.png" alt="" className="mx-auto" />
        </div>

        <div className="flex my-6">
          <a
            href="#programs"
            className="btn text-black bg-white mx-auto hover:bg-white/75"
          >
            PARTNER WITH US
          </a>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1
            className="text-white/90 title mx-auto leading-relaxed font-light"
            style={{ textAlign: "center" }}
          >
            Grow, and innovate with Assetra. Explore opportunities in
            affiliations
          </h1>
        </div>

        <div id="programs">
          <a
            href="/referral"
            className="group transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 rounded-xl backdrop-blur-lg border border-white shadow-xl" />

              <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-xl overflow-hidden program">
                <div className="program-img">
                  <img src="/assets/Affiliates.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    ASSETRA AFFILIATE PROGRAM
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    The Assetra Affiliate Program rewards individuals for
                    referring new users to our platform. Earn commissions while
                    promoting a cutting-edge digital asset ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/ambassador"
            className="group transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 rounded-xl backdrop-blur-lg border border-white shadow-xl" />

              <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-xl overflow-hidden program">
                <div className="program-img">
                  <img src="/assets/Ambassador.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    ASSETRA AMBASSADOR PROGRAM
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    Join the Assetra Ambassador Program and help grow our
                    community. Represent Assetra, share our vision, and get
                    rewarded for your impact. Careers
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/business"
            className="group transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 rounded-xl backdrop-blur-lg border border-white shadow-xl" />

              <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-xl overflow-hidden program">
                <div className="program-img">
                  <img src="/assets/a4b.png" alt="" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    ASSETRA BUSINESS AFFILIATE PROGRAM
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    The Assetra Business Affiliate Program rewards businesses
                    for referring clients to our platform. Partner with
                    crypto-using companies to create a mutually beneficial
                    relationship.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
