import React from 'react';
import { Avatar, Text } from "native-base";
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

const CustomSidebarMenu = (props) => {
    const reducer = useSelector(state => state)
    let user = reducer.user
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Avatar size="48px" style={styles.sideMenuProfileIcon}>
                {user.avatar}
            </Avatar>
            <Text textAlign={"center"}>{user.full_name}</Text>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    }
});

export default CustomSidebarMenu;
