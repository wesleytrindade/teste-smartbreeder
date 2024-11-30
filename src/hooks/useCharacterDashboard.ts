import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { getCharacterDashboard } from "../redux/characterDashboard/thunk";

export function useDashboard() {
    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector((store) => store.charactersDashboard);
    const selectedCharacter = useAppSelector((store) => store.sidebarList.selectedCharacter);

    useEffect(() => {
        dispatch(getCharacterDashboard(selectedCharacter));
    }, [selectedCharacter]);

    return { data, loading, error};
}