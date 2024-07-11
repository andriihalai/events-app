import {View, Text, Button} from 'react-native';
import styles from '../screen.layout.presets';
import {useSignupMutation, useLoginMutation} from '../../api/services/auth';
import {useAppDispatch} from '../../store/store';
import {setCredentials} from '../../store/authSlice';

const userData = {
  username: 'Android',
  email: 'test3@gmail.com',
  password: 'password',
};

export default function HomeScreen() {
  const [signup] = useSignupMutation();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleSignup = async () => {
    try {
      const user = await signup(userData).unwrap();
      dispatch(setCredentials(user));
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleLogin = async () => {
    try {
      const user = await login({
        email: userData.email,
        password: userData.password,
      }).unwrap();
      dispatch(setCredentials(user));
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <View style={styles.layout}>
      <Text>Home!</Text>
      <Button title="signup" onPress={handleSignup} />
      <Button title="login" onPress={handleLogin} />
    </View>
  );
}
