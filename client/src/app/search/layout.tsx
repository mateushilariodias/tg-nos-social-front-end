// src/app/search/layout.tsx

import React from "react";

const SearchLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>Busca</h1>
      {children}
    </div>
  );
};

export default SearchLayout;