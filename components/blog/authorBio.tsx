import React from "react";

type AuthorBioProps = {
  penname: string;
};

interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface Author {
  name: string;
  penname: string;
  title: string;
  image: string;
  about: string;
  social: Social[];
}

function getAuthor(penname: string): (typeof authors)[number] | undefined {
  return authors.find((author) => author.penname === penname);
}

const authors: Author[] = [
  {
    name: "Giordano Bertin-Maurice",
    penname: "gio",
    title: "Chief Executive Officer",
    image: "/assets/Giordano.png",
    about: `Giordano Bertin-Maurice is a technology enthusiast and a prominent voice 
    in the cryptocurrency world. With years of experience working in tech startups 
    and leading blockchain initiatives, Giordano has become a go-to expert for insights 
    on how emerging technologies like Bitcoin are transforming the financial landscape. 
    In addition to his professional work, Giordano is also passionate about educating the 
    broader public on cryptocurrency, regularly writing articles and giving talks at conferences.`,
    social: [
      {
        platform: "Telegram",
        url: "https://t.me/jeeordahnoh",
        icon: "/assets/telegram.png",
      },
      {
        platform: "Linkedin",
        url: "linkedin.com/in/giordano-bertin-maurice-676319232",
        icon: "/assets/linkedin.png",
      },
    ],
  },
  {
    name: "Bob Johnson",
    penname: "bob",
    title: "Chief Marketing Officer",
    image: "/assets/Bob.png",
    about: `Giordano Bertin-Maurice is a technology enthusiast and a prominent voice 
    in the cryptocurrency world. With years of experience working in tech startups 
    and leading blockchain initiatives, Giordano has become a go-to expert for insights 
    on how emerging technologies like Bitcoin are transforming the financial landscape. 
    In addition to his professional work, Giordano is also passionate about educating the 
    broader public on cryptocurrency, regularly writing articles and giving talks at conferences.`,
    social: [
      {
        platform: "X",
        url: "https://x.com/rjj_bob",
        icon: "/assets/x.png",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/bobjohn2129/",
        icon: "/assets/insta.png",
      },
      {
        platform: "X",
        url: "https://x.com/rjj_bob",
        icon: "/assets/x.png",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/bobjohn2129/",
        icon: "/assets/insta.png",
      },
    ],
  },
];

const AuthorBio: React.FC<AuthorBioProps> = ({ penname }) => {
  const author = getAuthor(penname);

  if (!author) {
    return (
      <div className="py-8 px-20 bg-base-300 rounded-xl">Author not found</div>
    );
  }

  return (
    <div className="py-8 px-20 bg-base-300 rounded-xl">
      <div className="flex justify-center gap-4 my-2">
        <img
          src={author.image}
          alt={`${author.name}'s profile`}
          className="w-24 h-24 rounded-full"
        />
        <div className="flex h-24">
          <div className="my-auto">
            <h2 className="text-xl font-bold">{author.name}</h2>
            <h3 className="text-lg">{author.title}</h3>
          </div>
        </div>
      </div>
      <p className="my-2 px-4">{author.about}</p>
      <div className="mt-4 flex justify-center gap-4">
        {author.social.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.icon}
              alt={social.platform}
              className="inline-block w-4 h-4"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AuthorBio;
