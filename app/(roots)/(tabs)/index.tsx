import {View, Text} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="text-2xl font-bold my-4 font-rubik">Welcome to ReState</Text>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link href={{pathname: '/properties/[id]', params: {id: 1}}}>Property</Link>
        </View>
    );
}
