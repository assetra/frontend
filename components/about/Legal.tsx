const Legal = () => {
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
            Assetra ensures transparency, security, and regulatory compliance
          </h1>
        </div>

        <div className="legal-grid">
          <div className="transform hover:scale-[1.02] transition-all duration-300 legal-item">
            <h3 className="text-lg sm:text-xl font-bold text-white text-center">
              United States of America
            </h3>
            <div className="text-white/90 text-sm sm:text-base leading-relaxed">
              <ul>
                <li>Delaware</li>
                <li>Assetra Trading Group, Inc</li>
                <li>Incorporation Date: 02/28/2025 </li>
                <li>Corporation File Number: 10116385</li>
              </ul>
            </div>
            <div className="program-img flex">
              <img src="/assets/Delaware.png" alt="" className="m-auto" />
            </div>
          </div>

          <div className="transform hover:scale-[1.02] transition-all duration-300 text-center legal-item">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Terms of Service
            </h3>
            <div>
              <div className="flex">
                <img
                  src="/assets/Assetra.png"
                  alt=""
                  className="m-auto max-w-[175px] aspect-square"
                />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ marginTop: "-12px" }}
              >
                Assetra
              </h3>
            </div>
            <div className="flex">
              <a href="/terms" className="mx-auto">
                READ MORE
              </a>
            </div>
          </div>

          <div className="transform hover:scale-[1.02] transition-all duration-300 text-center legal-item">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Privacy Policy
            </h3>
            <div>
              <div className="flex">
                <img
                  src="/assets/Assetra.png"
                  alt=""
                  className="m-auto max-w-[175px] aspect-square"
                />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ marginTop: "-12px" }}
              >
                Assetra
              </h3>
            </div>
            <div className="flex">
              <a href="/policy" className="mx-auto">
                READ MORE
              </a>
            </div>
          </div>

          <div className="transform hover:scale-[1.02] transition-all duration-300 text-center legal-item">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Risk Disclosure
            </h3>
            <div>
              <div className="flex">
                <img
                  src="/assets/Assetra.png"
                  alt=""
                  className="m-auto max-w-[175px] aspect-square"
                />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ marginTop: "-12px" }}
              >
                Assetra
              </h3>
            </div>
            <div className="flex">
              <a href="/disclosure" className="mx-auto">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
