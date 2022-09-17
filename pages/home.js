import { Fragment, useEffect, useState } from 'react';
import { Box,Heading } from "native-base";
import { useDispatch, useSelector } from 'react-redux'
import AccountsCMP from '../components/accounts';
import SpinnerCMP from '../components/spinner';
import { _getAccounts } from '../utils/helper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchCMP from '../components/search';
import {onAccountsRequest} from '../store/actions'

const HomeScreen = () => {
    
    const dispatch = useDispatch()
    const reducer = useSelector(state => state)
    let isLoading = reducer?.isLoading
    let accounts = reducer?.accounts ? reducer?.accounts  : []

    useEffect(() => {
        dispatch(onAccountsRequest())
    }, [])

    return (
        <SafeAreaView>
            <Box >
                <Heading fontSize="xl" p="4" pb="3">
                    Account
                </Heading>
                <SearchCMP/>
                {isLoading ? <SpinnerCMP/> : null}
                <AccountsCMP accounts={accounts}/>
            </Box>
        </SafeAreaView>
       
    );
}

export default HomeScreen