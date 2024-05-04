import React from "react";

const StringAvatar = ({ name }: { name: string }) => {
  const startName = name.charAt(0).toUpperCase();
  return (
    <div className="bg-red-300 w-9 text-center justify-center aspect-square rounded-full flex items-center">
      {startName}
    </div>
  );
};

export default StringAvatar;
