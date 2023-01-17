import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {findIndex, map, uniqueId} from 'lodash'
import {levels} from '../../Config/globalConstants'

const ChapterRoutes = () => {
    const location = useLocation();
    const [routes, setRoutes] = useState([]);
    const [currentLevel, setCurrentLevel] = useState([]);
    const [buttonName, setButtonName] = useState();
    const [sections, setSections] = useState([]);

    const handleMenu = (e) => {
        const name = e.target.name;
        setButtonName(name);
        const index = findIndex(currentLevel, (level) => level.name === name);
        setSections(currentLevel[index].sections);
    };

    useEffect(() => {
        const level = location?.state?.level;
        const routes = map(levels[level], ({ name }) => (
            <button
                key={uniqueId()}
                className={`px-5 border-rounded-t rounded-t z-10 py-2  ${
                    name === buttonName
                        ? "bg-white border border-b-0 border-neutral-300 text-neutral-700"
                        : "text-neutral-500"
                }`}
                onClick={handleMenu}
                name={name}
            >
                {name}
            </button>
        ));
        setRoutes(routes);
        setCurrentLevel(levels[level]);
    }, [location, buttonName]);

    useEffect(() => {
        setSections(currentLevel[0]?.sections);
        setButtonName(currentLevel[0]?.name);
    }, [currentLevel]);

    useEffect(() => {}, [buttonName]);
    return (
        <div>

        </div>
    )
}

export default ChapterRoutes
