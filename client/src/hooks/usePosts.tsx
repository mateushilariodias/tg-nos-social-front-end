import { useEffect, useState } from 'react';
import data from '../../public/data.json';

interface Comment {
  id: number;
  commentContent: string;
  userName: string;
  userImg: string;
  commentUserId: number;
  postId: number;
  createdComment: string;
}

interface Like {
  id: number;
  userName: string;
  likeUserId: number;
  postId: number;
}

interface Post {
  id: number;
  profilePicture: string;
  author: string;
  description: string;
  image: string;
  createdPost: string;
  ngoId: number;
  likes?: Like[];
  comments?: Comment[];
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Mescla likes e comentários com os posts correspondentes
    const postsWithDetails = data.posts.map((post) => ({
      ...post,
      likes: data.likes.filter((like) => like.postId === post.id),
      comments: data.comments.filter((comment) => comment.postId === post.id),
    }));
    setPosts(postsWithDetails);
  }, []);

  return posts;
};