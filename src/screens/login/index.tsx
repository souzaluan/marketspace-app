import type { AuthStackParamList } from '@/routes/auth/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<AuthStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return <Text>login</Text>;
}
