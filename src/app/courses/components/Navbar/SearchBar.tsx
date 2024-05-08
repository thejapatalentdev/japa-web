import React from "react";

export default function SearchBar() {
  return (
    <input
      placeholder="What do you want to Learn"
      required
      type="search-box"
      className="lg:w-[35%] xl:block lg:hidden hidden min-w-[400px] px-8 py-4 bg-[#F5F5F5] rounded-full border-none outline-none"
    />
  );
}
