import React from "react";

type DateFormatterProps = {
  pen: string;
};

const TeamUrl: React.FC<DateFormatterProps> = ({ pen }) => {
  interface TeamMember {
    pen: string;
    name: string;
    imageUrl: string;
  }

  const teamMembers: TeamMember[] = [
    {
      pen: "gio",
      name: "Giordano Bertin-Maurice",
      imageUrl: "/assets/Giordano.png",
    },
    {
      pen: "ashmeet",
      name: "Ashmeet Singh",
      imageUrl: "/assets/Ashmeet.png",
    },
    {
      pen: "bob",
      name: "Bob Johnson",
      imageUrl: "/assets/Bob.png",
    },
    {
      pen: "claude",
      name: "Claude Zion",
      imageUrl: "/assets/Claude.png",
    },
    {
      pen: "yash",
      name: "Yash Jain",
      imageUrl: "/assets/Yash.png",
    },
  ];

  function getTeamMemberImageUrl(pen: string): string | undefined {
    const member = teamMembers.find((member) => member.pen === pen);
    return member ? member.imageUrl : undefined;
  }

  return (
    <>
      <img
        className="w-6 rounded-full hover:border-[3px] border-blue-300"
        src={getTeamMemberImageUrl(pen)}
        alt={pen}
      />
    </>
  );
};

export default TeamUrl;
