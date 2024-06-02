import React, { useState, ChangeEvent, MouseEvent } from 'react';
import memeProcMgr from '../../constants/MemeProcessManager.json';
import { handleError } from "../../lib/error-handlers";
import { getErrorMessage } from "../../lib/utils";
import { useAddress, useContract, useConnectionStatus, useContractWrite } from "@thirdweb-dev/react";
import { utils } from 'ethers';
import { useMemeFund } from '../../graph_queries/subQF'; // Adjust the import path as needed

interface FundMemeProps {
    memeId: string;
}

const FundMeme: React.FC<FundMemeProps> = ({ memeId }) => {
    const [showInput, setShowInput] = useState(false);
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const contractAddress = memeProcMgr.address;
    const abi = memeProcMgr.abi;

    const { contract } = useContract(contractAddress, abi);
    const connectionStatus = useConnectionStatus();
    const handleFundMeme = useContractWrite(contract, "fundMeme");

    const totalFunds = useMemeFund(memeId);

    const handleFundMemeTRX = async () => {
        if (connectionStatus === "connected") {
            setIsLoading(true);

            if (contract) {
                try {
                    const amountInWei = utils.parseEther(amount);
                    await handleFundMeme.mutateAsync({ args: [memeId], overrides: { value: amountInWei } });
                    // Optionally handle success
                    setShowInput(false); // Hide the input field after accepting
                    setAmount(''); // Clear the input field
                } catch (error) {
                    handleError(getErrorMessage(error));
                } finally {
                    setIsLoading(false);
                }
            } else {
                handleError("Error: \nContract does not exist");
            }
        } else {
            handleError("Error: \nWallet Not Connected");
        }
    };

    const handleFundClick = () => {
        setShowInput(!showInput);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    const handleAcceptClick = async (event: MouseEvent<HTMLButtonElement>) => {
        handleFundMemeTRX();
    };

    return (
        <div className='flex items-center space-x-1'>
            <div onClick={handleFundClick} className='cursor-pointer flex items-center space-x-1'>
                <img src='/bx-coin-stack.svg' alt='Fund icon' width={24} height={24} />
                <p>Fund</p>
                <p>({totalFunds} ETH)</p>
            </div>
            {showInput && (
                <div className='flex items-center space-x-1'>
                    <input
                        type="number"
                        step="0.1"
                        value={amount}
                        onChange={handleInputChange}
                        placeholder="Funding amount in ETH"
                        className='border p-1 rounded'
                    />
                    <button
                        onClick={handleAcceptClick}
                        className='bg-blue-500 text-white p-1 rounded'
                        disabled={isLoading}
                    >
                        {isLoading ? "Processing..." : "Accept"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default FundMeme;
