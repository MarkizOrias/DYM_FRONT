import { useQuery } from "@apollo/client";
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries";
import { utils } from 'ethers';

export function useMemeFund(memeId: string) {
    const { data } = useQuery(GET_ACTIVE_ITEMS);

    if (!data || !data.memeFundeds) {
        return 0;
    }

    const totalFunds = data.memeFundeds
        .filter((item: any) => item.MemeProcessManager_id === memeId)
        .reduce((acc: number, item: any) => acc + parseFloat(utils.formatEther(item.value)), 0)
        .toFixed(2);

    return parseFloat(totalFunds);
}
