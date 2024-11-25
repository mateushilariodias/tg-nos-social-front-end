import { useState, useCallback } from 'react';
import { ILike } from "@/interfaces";

export const useLikes = () => {
  const [likes, setLikes] = useState<ILike[]>([]);

  const getLikes = useCallback(async (postId: number) => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      const postLikes = data.likes.filter((like: ILike) => like.postId === postId); 
      // Atualiza apenas se os likes forem diferentes
      setLikes((prevLikes) => {
        const isSame = JSON.stringify(prevLikes) === JSON.stringify(postLikes);
        return isSame ? prevLikes : postLikes;
      });
      return postLikes;
    } catch (error) {
      console.error('Error loading likes:', error);
      return [];
    }
  }, []); // `useCallback` garante que a função não será recriada

  const toggleLike = useCallback(async (postId: number, liked: boolean) => {
    try {
      setLikes((prevLikes) =>
        liked
          ? prevLikes.filter((like: ILike) => like.postId !== postId)
          : [...prevLikes, { id: Date.now(), postId, userName: 'Você', likeUserId: '1' }]
      );
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  }, []);

  return { likes, getLikes, toggleLike };
};