import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { map, uniqueId } from "lodash";
import { levels } from "../../Config/globalConstants";
import { levels_name } from "../../datas/levels_name";

const ChapterRoutes = () => {
  const location = useLocation();
  const [routes, setRoutes] = useState([]);
  const [levelName, setLevelName] = useState("");

  const subroutines = (subsections) => (
    <ul>
      {map(subsections, ({ name, subsection }) => (
        <li
          key={uniqueId("subsection")}
          className="ml-7 text-blue-500 underline"
          style={{ listStyle: "circle" }}
        >
          <Link to="/section" state={{ subsection }}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    const level = location?.state?.level;
    setLevelName(levels_name[level]);

    const routes = map(levels[level], ({ name, subsections }, index) => (
      <li key={uniqueId("level")}>
        <h3 className="font-semibold">
          {index + 1}. {name}
        </h3>
        {subroutines(subsections)}
      </li>
    ));
    setRoutes(routes);
  }, [location]);
  return (
    <div className="flex flex-col max-h-full">
      <h1 className="text-2xl font-bold py-3">{levelName}</h1>
      <ul className="overflow-y-scroll">{routes}</ul>
    </div>
  );
};

export default ChapterRoutes;
