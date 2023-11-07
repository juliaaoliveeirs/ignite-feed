import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { PostType } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/juliaaoliveeirs.png',
			name: 'Julia Oliveira',
			role: 'Web Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2023-11-06 20:05:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/maykbrito.png',
			name: 'Mayk Brito',
			role: 'Educator @Rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2023-11-05 19:30:00'),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</main>
			</div>
		</div>
	);
}
