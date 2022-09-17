import React from "react";
import { Spinner, HStack } from "native-base";

const SpinnerCMP = () => {
    return <HStack space={8} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
    </HStack>;
};
export default SpinnerCMP
