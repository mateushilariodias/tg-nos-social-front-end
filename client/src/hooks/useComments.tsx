import { useState, useCallback } from 'react';
import { IComment } from "@/interfaces";

export const useComments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);

  const getComments = useCallback(async (postId: number) => {
    setLoading(true);
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      const postComments = data.comments.filter((comment: IComment) => comment.postId === postId); 
      // Atualiza apenas se os comentários forem diferentes
      setComments((prevComments) => {
        const isSame = JSON.stringify(prevComments) === JSON.stringify(postComments);
        return isSame ? prevComments : postComments;
      });
      return postComments;
    } catch (error) {
      console.error('Error loading comments:', error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const createComment = useCallback(async (newComment: IComment) => {
    try {
      setComments((prevComments) => [...prevComments, newComment]);
      return newComment;
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  }, []);

  return { comments, getComments, createComment, loading };
};