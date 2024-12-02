import { useEffect} from "react";
import { getSidebarList } from "../redux/sidebarList/thunk";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";

export function useSidebar() {
    const dispatch = useAppDispatch();

    const { data, loading, error, selectedCharacter } = useAppSelector((store) => store.sidebarList);

    useEffect(() => {
        dispatch(getSidebarList());
    }, [selectedCharacter]);

 

    return { data, loading, error,selectedCharacter };
}