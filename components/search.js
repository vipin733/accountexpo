import { VStack, Input, Center } from "native-base";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { onAccountsRequest } from "../store/actions";

const SearchCMP = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const debouncedSearch = useRef(
        debounce(async (query) => {
            dispatch(onAccountsRequest(query))
        }, 1000)
    ).current;

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);


    async function onChnageText(text) {
        debouncedSearch(text);
        setSearch(text)
    }

    return <Center >
        <VStack my="4" space={5} w="100%" maxW="350px">
            <VStack w="100%" space={5} alignSelf="center">
                <Input placeholder="Search People Places" value={search} onChangeText={t => onChnageText(t)} width="100%" borderRadius="4" py="3" px="1" fontSize="14" />
            </VStack>
        </VStack>
    </Center>;
}

export default SearchCMP