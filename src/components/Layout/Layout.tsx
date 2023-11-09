import React from "react";

type LayoutInputProps = {
  children: any;
};

const Layout: React.FC<LayoutInputProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
export default Layout;
