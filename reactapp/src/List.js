import React from "react";
import './Home.css';
import Item from "./Item";
import useRoveFocus from "./useRoveFocus";
import menu from "./menu";

const List = () => {
    const [focus, setFocus] = useRoveFocus(menu.length);

    return (
        <div className='submenu'>
            <h3 className='menu-arrows'>**** MENU ****</h3>
            <nav className='flex'>
                <ul className='menu'>
                    {menu.map((menuItem, index) => (
                        <Item
                            key={menu}
                            setFocus={setFocus}
                            index={index}
                            focus={focus === index}
                            character={menuItem}
                            className='link'
                        />
                    ))}
                </ul>
            </nav>
            <p className='up-down'>UP(↑) DOWN(↓)</p>
        </div>
    );
};

export default List;