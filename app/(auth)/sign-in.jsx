import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
	const [form, setForm] = useState({ email: "", password: "" });

	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = () => {};

	return (
		<SafeAreaView className='h-full bg-primary'>
			<ScrollView>
				<View className='justify-center w-full px-4 my-6 h-[90vh]'>
					<Image
						source={images.logo}
						resizeMode='contain'
						className='w-[115px] h-[35px] '
					/>
					<Text className='mt-10 text-2xl font-semibold text-white text-psemibold'>
						Log in to Aora
					</Text>
					<FormField
						title='Email'
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles='mt-7'
						keyboardType='email-address'
					/>
					<FormField
						title='Password'
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles='mt-7'
					/>
					<CustomButton
						title='Sign In'
						handlePress={submit}
						containerStyles='mt-7'
						isLoading={isSubmitting}
					/>
					<View className='flex-row items-center justify-center gap-2 pt-5'>
						<Text className='text-base text-gray-100 text-pregular'>
							Don't have an account?
						</Text>
						<Link
							href='/sign-up'
							className='text-lg font-semibold text-secondary'
						>
							Sign Up
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
