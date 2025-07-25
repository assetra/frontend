import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Giordano Bertin-Maurice",
    role: "Chief Executive Officer",
    description:
      "A digital asset trader with almost 5 years of experience looking to change the digital asset landscape.",
    image: "/assets/Giordano.png",
    socials: [
      {
        platform: "portfolio",
        icon: "/assets/portfolio.png",
        url: "https://jeeordahnoh.wixsite.com/jeeordahnoh",
      },
      {
        platform: "telegram",
        icon: "/assets/telegram.png",
        url: "https://t.me/jeeordahnoh",
      },
    ],
  },
  {
    id: 2,
    name: "Ashmeet Singh",
    role: "Chief Technology Officer",
    description: "Innovating for Building web3 more secure and adoptable.",
    image: "/assets/Ashmeet.png",
    socials: [
      {
        platform: "linkedin",
        icon: "/assets/linkedin.png",
        url: "https://www.linkedin.com/in/singhashmeet/",
      },
      {
        platform: "twitter",
        icon: "/assets/x.png",
        url: "https://x.com/Ashmeet70884617",
      },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "Chief Marketing Officer",
    description:
      "Results-oriented, demand-generation-obsessed CMO with B2B SaaS DNA. Engineering and finance-grounded marketing success at the nexus of where the application meets the network",
    image: "/assets/Bob.png",
    socials: [
      {
        platform: "instagram",
        icon: "/assets/insta.png",
        url: "https://www.instagram.com/bobjohn2129/",
      },
      {
        platform: "twitter",
        icon: "/assets/x.png",
        url: "https://x.com/rjj_bob",
      },
    ],
  },
  {
    id: 4,
    name: "Claude Zion",
    role: "Chief Operating Officer",
    description:
      "A passionate Software Engineer on an exhilarating journey through the vast cosmos of computer science.",
    image: "/assets/Claude.png",
    socials: [
      {
        platform: "linkedin",
        icon: "/assets/linkedin.png",
        url: "https://www.linkedin.com/in/claudezion/",
      },
      {
        platform: "github",
        icon: "/assets/github.png",
        url: "https://github.com/claudezion",
      },
    ],
  },
  {
    id: 5,
    name: "Yash Jain",
    role: "Chief Security Officer",
    description:
      "Blockchain developer passionate about web 3, AI, and sustainability, driving positive change through technology.",
    image: "/assets/Yash.png",
    socials: [
      {
        platform: "linkedin",
        icon: "/assets/linkedin.png",
        url: "https://www.linkedin.com/in/0xyashjain",
      },
      {
        platform: "github",
        icon: "/assets/github.png",
        url: "https://github.com/yashj09",
      },
      {
        platform: "twitter",
        icon: "/assets/x.png",
        url: "https://x.com/0xYash_Jain",
      },
    ],
  },
  {
    id: 6,
    name: "David Lam",
    role: "Chief Financial Officer",
    description:
      "A finance leader with 17+ years of experience at BMO Bank, McDonald's, and City Credit Investment Bank. He holds a Bachelor's, an MBA, finance certifications, and CPA credentials in Canada and Australia.",
    image: "/assets/David.png",
    socials: [
      {
        platform: "linkedin",
        icon: "/assets/linkedin.png",
        url: "https://www.linkedin.com/in/david-lam-345a7528/",
      },
    ],
  },
];

export default function Team() {
  return (
    <section className="relative flex justify-center px-4 pt-20 pb-16 min-h-screen overflow-hidden">
      <div className="absolute inset-0 animate-gradient-xy" />

      <div className="absolute inset-0 opacity-30" />

      <div className="relative max-w-[1280px] w-full z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-white font-bold text-xl sm:text-2xl tracking-wider mb-4 relative inline-block">
            OUR TEAM
            <div className="absolute -bottom-2 left-1/2 w-12 h-1 bg-blue-500 transform -translate-x-1/2 rounded-full" />
          </h2>
          <p className="text-white/90 text-2xl sm:text-3xl lg:text-4xl mt-4 max-w-2xl mx-auto leading-relaxed font-light">
            The Assetra team excels in innovation and is dedicated to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="h-full flex flex-col relative backdrop-blur-xl bg-white/[0.08] rounded-2xl border border-white/[0.08] shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/[0.12]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex gap-4 items-start">
                    <div
                      className={`relative shrink-0 w-20 h-20 rounded-full overflow-hidden group-hover:shadow-lg transition-shadow duration-300 `}
                    >
                      <Image
                        fill
                        src={member.image}
                        alt={`${member.name}'s profile`}
                        className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm sm:text-base mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/80 mt-4 text-sm sm:text-base leading-relaxed flex-grow">
                    {member.description}
                  </p>

                  {member.socials.length > 0 && (
                    <div className="flex gap-3 mt-6 pt-4 border-t border-white/[0.08]">
                      {member.socials.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="group/icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            className="bg-white/[0.08] p-2 rounded-full backdrop-blur-sm transition-all duration-300 
                            hover:bg-white/[0.12] hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
                          >
                            <Image
                              width={20}
                              height={20}
                              src={social.icon}
                              alt={social.platform}
                              className="w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110"
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[100%] flex justify-center mt-10">
          <a
            href="/about?q=team"
            className="max-w-32 text-[#FFFFFF] bg-[#1e68f6] px-4 py-[5px] rounded-full text-[1rem] max-h-12 w-[8rem] transition-all duration-300 
                            hover:bg-[#1e68f6]/[0.12] hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
