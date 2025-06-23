import { Heading } from "./..";
import React from "react";

export default function UserStatistics({ userCount = "300K", userHiredText = "users got hired", ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start md:w-full gap-1`}>
      <Heading size="text11xl" as="p" className="text-[52.75px] font-medium tracking-[-2.11px] !text-cyan-900">
        {userCount}
      </Heading>
      <Heading as="p" className="text-[16px] font-normal tracking-[-0.64px] !text-gray-800_99">
        {userHiredText}
      </Heading>
    </div>
  );
}
