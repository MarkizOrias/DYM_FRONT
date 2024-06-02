import { useQuery } from "@apollo/client";
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries";

export function useMemeCount() {
    const { data } = useQuery(GET_ACTIVE_ITEMS);
    const memeCount = data?.memeCreateds?.length || 0;
    return memeCount;
}
