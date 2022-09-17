import { useRef } from 'react';
import { AlertDialog, Button, Center } from 'native-base';
import { useDispatch } from 'react-redux';
import { onLogoutRequest } from '../store/actions';
import { _pushHome } from '../utils/helper';

const LogOutScreen = ({ navigation }) => {

    const cancelRef = useRef(null);
    const dispatch = useDispatch()
    
    const _requestLogout = (isLogout = false) => {
        if (isLogout) {
            dispatch(onLogoutRequest())
        }else{
            _pushHome(navigation)
        }
    }

    return <Center flex={1} px="3">
        <Center>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={true} onClose={() =>_requestLogout(false)}>
                <AlertDialog.Content>
                    <AlertDialog.Header>Proceed Sign-Out?</AlertDialog.Header>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button variant="unstyled" colorScheme="coolGray" onPress={() => _requestLogout(false)} ref={cancelRef}>
                                Cancel
                            </Button>
                            <Button colorScheme="danger" onPress={() => _requestLogout(true)}>
                                Logout
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    </Center>
};

export default LogOutScreen