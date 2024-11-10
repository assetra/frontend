import Image from "next/image";

export default function Crypto() {
  const features = [
    {
      icon: "/assets/cr2.png",
      title: "CUSTOMIZABLE\nINTERFACE",
      description:
        "The exchange platform features a customizable interface, allowing users to personalize their trading experience based on their preferences and requirements.",
    },
    {
      icon: "/assets/cr3.png",
      title: "CUSTOMIZABLE\nCHARTS &\nINDICATORS",
      description:
        "Traders can benefit from customizable charts and indicators available on the exchange platform, enabling them to analyse market trends and make informed trading decisions based on their own strategies and preferences.",
    },
    {
      icon: "/assets/cr1.png",
      title: "CRYPTO\nDERIVATIVES",
      description:
        "Users can access a range of cryptocurrency derivatives, such as futures and options, through the exchange platform, providing additional flexibility and investment opportunities in the cryptocurrency market.",
    },
    {
      icon: "/assets/cr5.png",
      title: "MULTIPLE ORDER\nTYPES",
      description:
        "The exchange platform offers multiple order types, allowing traders to execute trades based on their specific needs and preferences.",
    },
    {
      icon: "/assets/cr7.png",
      title: "AI POWERED\nTRADING",
      description:
        "AI trading provides advanced algorithmic strategies, real-time market analysis, and automated trading, optimizing investment decisions and efficient execution for various digital assets.",
    },
    {
      icon: "/assets/cr4.png",
      title: "VARIETY OF\nTRADING PAIRS",
      description:
        "With a diverse selection of trading pairs for cryptocurrencies, the exchange platform caters to a broad range of traders seeking to invest in different digital assets.",
    },
    {
      isLast: true,
      icon: "/assets/cr6.png",
      title: "LOW TRADING\nFEES",
      description:
        "Traders can take advantage of low trading fees on the exchange platform, making it a cost-effective option for users looking to invest in cryptocurrencies.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
            WHY ASSETRA?
          </h2>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium max-w-2xl mx-auto leading-tight">
            Why Choose Assetra for Your Crypto Journey?
          </h1>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transform hover:scale-[1.02] transition-all duration-300
                  ${feature.isLast ? "flex items-center justify-center md:col-span-2 lg:col-span-3" : ""}`}
              >
                <div
                  className={`relative h-full mx-auto
                  ${feature.isLast ? "md:w-1/2 lg:w-1/3" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2F3241]/60 to-[#2F3241]/30 rounded-xl backdrop-blur-md border border-white/10 shadow-xl" />

                  <div className="relative h-full p-8 sm:p-10 rounded-xl">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-20 h-20 relative flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt="feature icon"
                          width={80}
                          height={80}
                          className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <h3 className="text-white font-bold text-center whitespace-pre-line">
                        {feature.title}
                      </h3>

                      <p className="text-white/90 text-center text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
