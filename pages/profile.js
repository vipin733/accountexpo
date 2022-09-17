import { VStack, FormControl, Center, Input, Button } from "native-base";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateUser } from "../utils/helper";

function ProfileScreen({ navigation }) {
    const [formData, setFromData] = useState({ username: "", email: "", first_name: "", last_name: "", contact_no: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)

    const reducer = useSelector(state => state)

    useEffect(() => {
        setFromData(reducer.user)
    }, [])
    const onSubmit = () => {
        if (loading) {
            return
        }
        setLoading(true)
        updateUser(formData, setLoading, errors, setErrors, navigation)
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

            <FormControl isRequired isInvalid={'first_name' in errors}>
                <FormControl.Label _text={{
                    bold: true
                }}>First Name</FormControl.Label>
                <Input isDisabled={loading} placeholder="First Name" value={formData.first_name} onChangeText={value => onChangeText("first_name", value)} />
                {'first_name' in errors ? <FormControl.ErrorMessage>{errors.first_name}</FormControl.ErrorMessage> : null}
            </FormControl>

            <FormControl isRequired isInvalid={'last_name' in errors}>
                <FormControl.Label _text={{
                    bold: true
                }}>Last Name</FormControl.Label>
                <Input isDisabled={loading} placeholder="Last Name" value={formData.last_name} onChangeText={value => onChangeText("last_name", value)} />
                {'last_name' in errors ? <FormControl.ErrorMessage>{errors.last_name}</FormControl.ErrorMessage> : null}
            </FormControl>

            <FormControl isRequired isInvalid={'email' in errors}>
                <FormControl.Label _text={{
                    bold: true
                }}>Email</FormControl.Label>
                <Input isDisabled={loading} type="email" placeholder="Email" value={formData.email} onChangeText={value => onChangeText("email", value)} />
                {'email' in errors ? <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> : null}
            </FormControl>

            <FormControl isRequired isInvalid={'contact_no' in errors}>
                <FormControl.Label _text={{
                    bold: true
                }}>Content No</FormControl.Label>
                <Input isDisabled={loading}  placeholder="Content No" value={formData.contact_no} onChangeText={value => onChangeText("contact_no", value)} />
                {'contact_no' in errors ? <FormControl.ErrorMessage>{errors.contact_no}</FormControl.ErrorMessage> : null}
            </FormControl>

            <FormControl  >
                <FormControl.Label _text={{
                    bold: true
                }}>Username</FormControl.Label>
                <Input isDisabled={true}  placeholder="Username" value={formData.username} />
            </FormControl>

            <Button onPress={onSubmit} mt="5" colorScheme="cyan" isLoading={loading} isLoadingText="Submitting">
                Submit
            </Button>
        </VStack>
    </Center>;
}

export default ProfileScreen