import { Box, FlatList, Avatar, HStack, VStack, Text, Spacer } from "native-base";
import { TouchableOpacity } from "react-native";

const Accounts = ({ accounts = [] }) => {

    return <FlatList data={accounts} renderItem={({
            item
        }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <TouchableOpacity>
                    <HStack space={[2, 3]} justifyContent="space-between">
                        <Avatar size="48px" >
                            {item.avatar}
                        </Avatar>
                        <VStack>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" bold>
                                {item.full_name}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.email}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.username}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" alignSelf="flex-start">
                            {item.created_at}
                        </Text>
                    </HStack>
                </TouchableOpacity>
            </Box>} keyExtractor={item => item.id} />
   
};

export default Accounts