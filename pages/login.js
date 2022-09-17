import { VStack, FormControl, Center, Input, Button } from "native-base";
import { useState } from "react";
import { loginUser } from "../utils/helper";

function LoginScreen() {
    const [formData, setFromData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        if (loading) {
            return
        }
        setLoading(true)
        loginUser(formData, setLoading, errors, setErrors)
    };

    const onChangeText = (type, value) => {
        formData[type] = value
        setFromData({
            ...formData,
        })
        delete errors[type]
        setErrors({
            ...errors
        })
    }

    return <Center flex={1}>
        <VStack width="90%" mx="3" maxW="300px">

            <FormControl isRequired isInvalid={'username' in errors}>
                <FormControl.Label _text={{
                    bold: true
                }}>Username</FormControl.Label>
                <Input isDisabled={loading} placeholder="Username" value={formData.username} onChangeText={value => onChangeText("username", value)} />
                {'username' in errors ? <FormControl.ErrorMessage>{errors.username}</FormControl.ErrorMessage> : <FormControl.HelperText>
                    Username should contain atleast 6 character.
                </FormControl.HelperText>}
            </FormControl>

            <FormControl isRequired isInvalid={'password' in errors}>
                <FormControl.Label _text={{
                    bold: true
                }}>Password</FormControl.Label>
                <Input isDisabled={loading} type="password" placeholder="Password" value={formData.password} onChangeText={value => onChangeText("password", value)} />
                {'password' in errors ? <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage> : <FormControl.HelperText>
                    Password should contain atleast 6 character.
                </FormControl.HelperText>}
            </FormControl>

            <Button onPress={onSubmit} mt="5" colorScheme="cyan" isLoading={loading} isLoadingText="Submitting">
                Submit
            </Button>
        </VStack>
    </Center>;
}

export default LoginScreen