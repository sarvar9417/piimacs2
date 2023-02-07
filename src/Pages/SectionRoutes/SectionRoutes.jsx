import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { allSubsections } from "../../datas/allSubsections";
import { findIndex, map, uniqueId } from "lodash";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SectionRoutes = () => {
  const location = useLocation();
  const locationState = location?.state?.subsection;
  const subsections = allSubsections[locationState]?.routes;
  const [datas, setDatas] = useState(subsections[0].datas);
  const [buttonName, setButtonName] = useState(subsections[0]?.name);
  const handleMenu = (e) => {
    const name = e.target.name;
    setButtonName(name);
    const index = findIndex(subsections, (level) => level.name === name);
    setDatas(subsections[index].datas);
  };

  const routes = map(subsections, ({ name, index }) => (
    <button
      key={uniqueId()}
      className={`px-5 border-rounded-t rounded-t z-10 py-2  ${
        name === buttonName || index === 0
          ? "bg-white border border-b-0 border-neutral-300 text-neutral-700"
          : "text-neutral-500"
      }`}
      onClick={handleMenu}
      name={name}
    >
      {name}
    </button>
  ));

  return (
    <div className="my-7 flex flex-col max-h-full ">
      <h1 className="pb-5 font-bold text-xl pl-4">
        {allSubsections[locationState]?.name}
      </h1>
      <div className="px-3 border-neutral-300">{routes}</div>
      <div className="w-full bg-white  p-4 shadow  overflow-y-scroll">
        <h1 className="font-bold text-2xl mb-3">{datas.name}</h1>
        {map(
          datas.definations,
          ({ name, defination, code, term, pseudocode, image, language }) => (
            <div className={`my-5 `} key={uniqueId()}>
              {name && (
                <h3 className="font-bold text-cyan-500 text-xl">{name}</h3>
              )}
              {term ? (
                <div className={language === "uzb" ? "bg-slate-100":""}>
                  <b>{term}</b> - {defination}
                </div>
              ) : (
                <div className={language === "uzb" ? "bg-slate-100 ":"" }>
                  {defination}
                </div>
              )}
              {pseudocode && (
                <div>
                  <h1 className="font-bold text-lg text-neutral-700 py-2">
                    Pseudocode
                  </h1>
                  <SyntaxHighlighter language="python" style={docco}>
                    {pseudocode}
                  </SyntaxHighlighter>
                  <br />
                </div>
              )}
              {code && (
                <div>
                  <h1 className="font-bold text-lg text-neutral-700 py-2">
                    Code in python
                  </h1>
                  <SyntaxHighlighter language="python" style={docco}>
                    {code}
                  </SyntaxHighlighter>
                </div>
              )}
              {image && (
                <div>
                  <img src={image.name} alt={image.alt} width={image.width} />
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SectionRoutes;
