import React from "react";

type DateFormatterProps = {
  pen: string;
};

const TeamName: React.FC<DateFormatterProps> = ({ pen }) => {
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

  function getTeamMemberName(pen: string): string | undefined {
    const member = teamMembers.find((member) => member.pen === pen);
    return member ? member.name : undefined;
  }

  return <p>{getTeamMemberName(pen)}</p>;
};

export default TeamName;
