'use client';
import { useActiveAccount } from 'thirdweb/react';

export const getWalletAddress = () => {
    const activeAccount = useActiveAccount();
    return activeAccount ? activeAccount.address : 'No wallet connected.';
};
