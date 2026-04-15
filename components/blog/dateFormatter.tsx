import React from "react";

type DateFormatterProps = {
  datetime: string;
};

const DateFormatter: React.FC<DateFormatterProps> = ({ datetime }) => {
  const formatDate = (datetime: string): string => {
    const date = new Date(datetime);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return <>{formatDate(datetime)}</>;
};

export default DateFormatter;
