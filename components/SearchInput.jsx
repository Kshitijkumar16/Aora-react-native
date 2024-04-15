import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
	title,
	value,
	placeholder,
	handleChangeText,
	otherStyles,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className='flex-row items-center w-full h-16 px-4 space-x-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary'>
			<TextInput
				className='text-base mt-0.5 text-white flex-1 font-pregular'
				value={value}
				placeholder={placeholder}
				placeholderTextColor={"#7b7b8b"}
				onChangeText={handleChangeText}
				secureTextEntry={title === "Password" && !showPassword}
			/>

			<TouchableOpacity>
				<Image
					source={icons.search}
					className='w-5 h-5'
					resizeMode='contain'
				/>
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
