import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore libero ipsa quo facilis quasi dolorum itaque non fuga exercitationem dicta, voluptatem reprehenderit labore rem ea ab iusto accusantium, quis eum."
          />
          <Post author="Julia Silva" content="Um novo post" />
        </main>
      </div>
    </div>
  );
}
