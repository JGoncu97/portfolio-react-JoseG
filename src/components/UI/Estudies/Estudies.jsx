import React from 'react';


export const Estudies = ({ Date, Name, Title }) => {
  const estudiesProfile = "flex items-center w-[50.5rem] h-[9rem] pl-10 font-sans";
  const institution = "text-3xl m-0.5";
  const title = "text-gray-500";
  const date = "font-bold border-b-2 border-[#fdca3f] inline";

  return (
    <div className={estudiesProfile}>
        <p className={date}>{Date}</p>
        <h4 className={institution}>{Title}</h4>
        <p className={title}>{Name}</p>
    </div>
  );
};
