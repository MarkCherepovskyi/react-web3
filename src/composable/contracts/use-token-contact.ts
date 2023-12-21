// @ts-nocheck
import {ERC20Mock__factory} from '../../types'
import {BigNumberish, ContractFactory, ethers, getAddress} from 'ethers'
import {Provider, PROVIDERS} from '@distributedlab/w3p'
import {computed} from "@distributedlab/reactivity"

export const useErc20Contract = (address: string, provider: Provider) => {
    const TokenDecimals = 8
    const rawProvider = computed(() =>
        provider.providerType !== PROVIDERS.Fallback
            ? new ethers.providers.Web3Provider(
                provider.rawProvider as ethers.providers.ExternalProvider,
                'any',
            )
            : (provider
                .rawProvider as unknown as ethers.providers.JsonRpcProvider),
    )


    const contractInstance = computed(
        () =>
            (!!provider &&
                !!address &&
                !!rawProvider.value &&
                !!address &&
                ERC20Mock__factory.connect(address, rawProvider)) ||
            undefined,
    )

    const contractInterface = ERC20Mock__factory.createInterface()

    const approve = async (spender: string, amount: BigNumberish) => {
        const data = contractInterface.encodeFunctionData('approve', [
            spender,
            amount,
        ])

        return provider.signAndSendTx({
            to: address,
            data,
        })
    }

    const decreaseAllowance = async (
        spender: string,
        subtractedValue: BigNumberish,
    ) => {
        const data = contractInterface.encodeFunctionData('decreaseAllowance', [
            spender,
            subtractedValue,
        ])

        return provider.signAndSendTx({
            to: address,
            data,
        })
    }

    const increaseAllowance = async (
        spender: string,
        addedValue: BigNumberish,
    ) => {
        const data = contractInterface.encodeFunctionData('increaseAllowance', [
            spender,
            addedValue,
        ])

        return provider.signAndSendTx({
            to: address,
            data,
        })
    }

    const mint = async (to: string, amount: BigNumberish) => {
        const data = contractInterface.encodeFunctionData('mint', [to, amount])
        return provider.signAndSendTx({
            to: address,
            data,
        })
    }

    const renounceOwnership = async () => {
        const data = contractInterface.encodeFunctionData('renounceOwnership')

        return provider.signAndSendTx({
            to: address,
            data,
        })
    }

    const transfer = async (address: string, amount: BigNumberish) => {
        const data = contractInterface.encodeFunctionData('transfer', [
            address,
            amount,
        ])

        return provider.signAndSendTx({
            to: address,
            data,
        })
    }

    const transferFrom = async (
        from: string,
        to: string,
        amount: BigNumberish,
    ) => {
        const data = contractInterface.encodeFunctionData('transferFrom', [
            from,
            to,
            amount,
        ])

        return provider.signAndSendTx({
            to: address,
            data,
        })
    }

    const deploy = async (abi, bytecode: string, tokenName: string,tokenSymbol: string) => {
        const factory = new ContractFactory(abi, bytecode, provider)
        const tx = factory.getDeployTransaction(tokenName, tokenSymbol, TokenDecimals)
        const sentTx = await provider.signAndSendTx(tx)

        return getAddress(sentTx.contractAddress)
    }

    const getAllowance = async (owner: string, spender: string) => {
        return contractInstance.value?.allowance(owner, spender)
    }

    const getBalanceOf = async (address: string) => {
        return contractInstance.value?.balanceOf(address)
    }

    const getDecimals = async () => {
        return contractInstance.value?.decimals()
    }

    const getName = async () => {
        return contractInstance.value?.name()
    }

    const getOwner = async () => {
        return contractInstance.value?.owner()
    }

    const getSymbol = async () => {
        return contractInstance.value?.symbol()
    }

    const getTotalSupply = async () => {
        return contractInstance.value?.totalSupply()
    }

    return {
        approve,
        decreaseAllowance,
        increaseAllowance,
        mint,
        renounceOwnership,
        transfer,
        transferFrom,
        getAllowance,
        getBalanceOf,
        getDecimals,
        getName,
        getOwner,
        getSymbol,
        getTotalSupply,
        deploy,
    }
}
