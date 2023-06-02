import { generateId } from '../utils';

export const CATEGORIES = {
	editorial: 'editorial',
	music: 'music',
	creative: 'creative',
	video: 'video',
	blog: 'blog',
};

export const photos = [
	{
		id: generateId(),
		src: 'https://media.gettyimages.com/id/1258277516/photo/a-victorious-taro-daniel-of-japan-shakes-hands-with-australias-christopher-oconnell-after.jpg?s=612x612&w=0&k=20&c=SiVFYuDgL3NFoyjl3D6sqBSBPZzPbbrWY6b0M7bhfuk=',
		title: 'Serene landscapes in harmony',
		category: [CATEGORIES.editorial, CATEGORIES.creative],
		description:
			"Discover the breathtaking beauty of serene landscapes captured in perfect harmony. Immerse yourself in nature's tranquil scenes and experience a sense of peace and serenity.",
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Exploring the urban tapestry',
		category: [CATEGORIES.music, CATEGORIES.video],
		description:
			'Embark on a journey through the vibrant tapestry of urban life. Explore bustling streets, towering buildings, and the dynamic energy of the cityscape. Experience the rhythm of urban living like never before.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80',
		title: 'Candid moments frozen in time',
		category: [CATEGORIES.creative],
		description:
			'Witness the beauty of candid moments captured and preserved in time. These photographs encapsulate genuine emotions and authentic experiences, freezing them in everlasting memories.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80',
		title: "Nature's symphony of colors",
		category: [CATEGORIES.video],
		description:
			'Immerse yourself in the vibrant and captivating symphony of colors found in nature. From breathtaking sunsets to vivid floral displays, witness the beauty and diversity of the natural world.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
		title: "Portraits capturing life's essence",
		category: [CATEGORIES.blog, CATEGORIES.editorial],
		description:
			'Step into the world of portraiture and explore captivating portraits that capture the essence of life. Each photograph tells a unique story, reflecting the emotions, personalities, and experiences of the subjects.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Architectural wonders unveiled',
		category: [CATEGORIES.blog],
		description:
			'Uncover the marvels of architectural design through a collection of captivating photographs. From iconic landmarks to contemporary structures, witness the grandeur and innovation of human-made creations.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1604955562858-ea42e1e3be70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
		title: 'Abstract visions unravelled',
		category: [CATEGORIES.editorial],
		description:
			'Delve into the world of abstract artistry through mesmerizing photographs that challenge traditional perspectives. Experience a visual journey that pushes boundaries and invites interpretation.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Aerial perspectives from above',
		category: [CATEGORIES.music],
		description:
			'Take to the skies and explore breathtaking aerial perspectives from above. Witness the world from a new vantage point, capturing stunning landscapes, cityscapes, and natural wonders.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1591871987673-f1513e38493b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80',
		title: 'Immersed in the wilderness',
		category: [CATEGORIES.creative],
		description:
			'Embark on an immersive adventure through untamed wilderness. Encounter the raw beauty of untouched landscapes, wildlife in their natural habitats, and the serenity of remote locations.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1300&q=80',
		title: 'Chronicles of the vibrant streets',
		category: [CATEGORIES.video],
		description:
			'Dive into the dynamic energy of bustling streets captured through a lens. Witness the stories unfolding in urban settings, where people, cultures, and moments converge in a tapestry of life.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1272&q=80',
		title: 'Macro marvels up close',
		category: [CATEGORIES.blog, CATEGORIES.creative],
		description:
			'Explore the intricate details of the world up close through captivating macro photography. Marvel at the hidden beauty found in the smallest of subjects, revealing a new world of textures and patterns.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=696&q=80',
		title: 'Timeless beauties in frames',
		category: [CATEGORIES.blog],
		description:
			'Discover timeless beauties captured within frames, showcasing the elegance and grace of subjects. From classic portraits to artistic compositions, these photographs evoke a sense of timeless allure.',
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
		title: 'Ethereal landscapes embracing serenity',
		category: [CATEGORIES.blog, CATEGORIES.editorial],
		description:
			"Step into a world of ethereal landscapes that embrace serenity. These photographs transport you to tranquil settings where nature's beauty takes center stage, offering a sense of peace and harmony.",
	},
	{
		id: generateId(),
		src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
		title: 'Whispers of light in the urban maze',
		category: [CATEGORIES.blog, CATEGORIES.editorial],
		description:
			'Witness the whispers of light that illuminate the urban maze. These photographs capture the interplay of light and shadows in cityscapes, revealing captivating moments of beauty amidst the urban hustle.',
	},
	{
		id: generateId(),
		src: 'https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Silhouette of a Man Playing Saxophone during Sunset',
		category: [CATEGORIES.music],
		description:
			'Immerse yourself in the soulful melodies as you witness the silhouette of a man playing the saxophone during a breathtaking sunset. This photograph captures the passion and emotion of music in a captivating moment.',
	},
	{
		id: generateId(),
		src: 'https://images.pexels.com/photos/2441175/pexels-photo-2441175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Man Playing Guitar While Sitting on Open Door',
		category: [CATEGORIES.music],
		description:
			'Experience the power of music as you observe a man playing the guitar while sitting on an open door. This photograph encapsulates the joy and expression that music brings, creating a captivating visual harmony.',
	},
	{
		id: generateId(),
		src: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Unknown Person Playing Guitar',
		category: [CATEGORIES.music, CATEGORIES.video],
		description:
			'Enter a world of rhythm and melody through the captivating image of an unknown person playing the guitar. This photograph captures the artistry and passion that resonates from skilled musicians, inviting you to join in their musical journey.',
	},
	{
		id: generateId(),
		src: 'https://images.pexels.com/photos/6953993/pexels-photo-6953993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title:
			'Young diverse ladies recording vlog about makeup products on smartphone',
		category: [CATEGORIES.creative, CATEGORIES.video],
		description:
			'Join a group of young diverse ladies as they record a vlog about makeup products on their smartphones. This photograph captures the creativity and enthusiasm of content creation, showcasing the intersection of beauty, technology, and self-expression.',
	},
];
