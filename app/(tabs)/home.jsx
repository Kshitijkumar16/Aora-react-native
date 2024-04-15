import {
	View,
	Text,
	FlatList,
	Image,
	RefreshControl,
	Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
	const { data: posts, refetch } = useAppwrite(getAllPosts);
	const { data: LatestPosts } = useAppwrite(getLatestPosts);

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = async () => {
		setRefreshing(true);
		await refetch();
		setRefreshing(false);
	};

	return (
		<SafeAreaView className='h-full bg-primary'>
			<FlatList
				data={posts}
				key={(item) => item.$id}
				renderItem={({ item }) => <VideoCard video={item} />}
				ListHeaderComponent={({ item }) => (
					<View className='px-4 my-6 space-y-6'>
						<View className='flex-row items-start justify-between mb-6'>
							<View>
								<Text className='text-sm text-gray-100 font-pmedium'>
									Welcome back
								</Text>
								<Text className='text-2xl font-semibold text-white'>
									Kshitij
								</Text>
							</View>
							<View className='mt-1.5'>
								<Image
									source={images.logoSmall}
									className='h-10 w-9'
									resizeMode='contain'
								/>
							</View>
						</View>

						<SearchInput placeholder={"Search for a video topic"} />

						<View className='flex-1 w-full pt-5 pb-8'>
							<Text className='mb-3 text-lg text-gray-100 font-pregular'>
								Latest videos
							</Text>
							<Trending posts={LatestPosts ?? []} />
						</View>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title='No videos found.'
						subtitle='Be the first one to upload a video'
					/>
				)}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			/>
		</SafeAreaView>
	);
};

export default Home;
