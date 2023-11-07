import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
	function handleDeleteComment() {
		onDeleteComment(content);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src='https://github.com/diego3g.png' alt='' />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Julia Oliveira</strong>
							<time
								title='06 de novembro às 20:05'
								dateTime='2023-11-06 20:05:00'
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button onClick={handleDeleteComment} title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>
				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
