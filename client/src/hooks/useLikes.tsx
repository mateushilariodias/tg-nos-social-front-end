import { useState } from 'react';
import { ILike } from '@/interfaces';
import axios from 'axios';

export const useLikes = () => {
  const [likes, setLikes] = useState<ILike[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getLikes = async (postId: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/posts/${postId}/likes`);
      setLikes(response.data);
      return response.data;
    } catch (err) {
      setError(err as Error);
      console.error('Error fetching likes:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = async (postId: number, liked: boolean) => {
    try {
      setLoading(true);
      if (liked) {
        await axios.delete(`/api/posts/${postId}/likes`);
      } else {
        await axios.post(`/api/posts/${postId}/likes`);
      }
    } catch (err) {
      setError(err as Error);
      console.error('Error toggling like:', err);
    } finally {
      setLoading(false);
    }
  };

  return { getLikes, toggleLike, loading, error };
};