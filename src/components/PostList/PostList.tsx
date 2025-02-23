import Post from '../Post/Post';
import styles from './styles.module.css'
import { Comment } from '../../types/Comment'

interface PostData {
  profilePicturePath: string;
  name: string;
  role: string;
  comments: Comment[]
}

const posts: PostData[] = [
  { 
    profilePicturePath: '/assets/op1.jpeg',
    name: 'Elizabeth Best', 
    role: 'Designer', 
    comments: []},
  { 
    profilePicturePath: '/assets/op2.jpeg', 
    name: 'Ron Ritchie', 
    role: 'Dev Back-end', 
    comments: [
      { profilePicturePath: '/assets/op3.jpeg', id: 1, author: 'John Doe', content: 'Est aspernatur quis eos natus dicta et internos' },
      { profilePicturePath: '/assets/op4.jpeg', id: 2, author: 'Alice Smith', content: 'Est aspernatur quis eos natus dicta et internos' }
    ] },
];

const PostList = () => {
  return (
    <div className={styles.postListContainer}>
      {posts.map((post, index) => (
        <Post 
          key={index}
          profilePicturePath={post.profilePicturePath}
          name={post.name}
          role={post.role}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default PostList;
