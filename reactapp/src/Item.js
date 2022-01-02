import React, { useEffect, useRef, useCallback } from "react";
import './Home.css';

const Item = ({ character, focus, index, setFocus }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (focus) {
            // Move element into view when it is focused
            ref.current.focus();
        }
    }, [focus]);

    const handleSelect = useCallback(() => {
        if (index === 0) {
            window.location.replace(`/`);
        } else if (index === 1) {
            window.open(`https://baptistehauville.notion.site/D-veloppeur-FullStack-JavaScript-71afac7331f4423a807a016416d480f7`, '_blank');
        } else if (index === 2) {
            window.location.replace(`/about`);
        } else if (index === 3) {
            window.location.replace(`/projects`);
        } else if (index === 4) {
            window.location.replace(`/contact`);
        }

        // setting focus to that element when it is selected
        setFocus(index);
    }, [character, index, setFocus]);

    return (
        <li
            tabIndex={focus ? 0 : -1}
            role="button"
            ref={ref}
            onClick={handleSelect}
            onKeyPress={handleSelect}
            className="link"
        >
            {character}
        </li>
    );
};

export default Item;