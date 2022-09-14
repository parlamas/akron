import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              <span style={{ color: "gold", fontSize: "11pt" }}>
                HORISTICS{" "}
                <span style={{ color: "white", fontSize: "9pt" }}>
                  CVR: 43 10 93 24
                  {/*<br />
                  <Link href="/dansk">
                    <a style={{ color: "lime" }}>Dansk</a>
                  </Link>*/}
                  <br />
                  <span style={{ color: "lime" }}>
                    On a cellphone, scroll all the way down to see the
                    categories list.
                  </span>
                </span>
              </span>
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
