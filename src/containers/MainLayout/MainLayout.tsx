import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-[1024px] mx-auto">{children}</div>;
};

export default MainLayout;
