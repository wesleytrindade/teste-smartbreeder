import { useEffect } from "react";
import { getCharactersList } from "../redux/charactersList/thunk";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";

export function useNavBar() {
    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector((store) => store.characterList);

    useEffect(() => {
        dispatch(getCharactersList());
    }, [dispatch]);

    return { data, loading, error };
}