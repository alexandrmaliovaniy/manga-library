import {createContext, useContext, useEffect, useState} from "react";

export const FavouritesContext = createContext({
    list: [],
    isFavourite: () => {},
    toggle: () => {}
})


export const FavouritesHook = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('favourites') || '[]'));
    }, [])

    useEffect(() => {
        if (!localStorage) return;
        localStorage.setItem("favourites", JSON.stringify(list));
    }, [list])

    const isFavourite = (id) => {
        return list.find(e => e.id === id)
    }
    const toggle = (el) => {
        if (isFavourite(el.id)) setList(list => list.filter(e => e.id !== el.id));
        else setList(list => [...list, el])
    }

    return {list, isFavourite, toggle}
}
export const useFavourites = () => useContext(FavouritesContext);