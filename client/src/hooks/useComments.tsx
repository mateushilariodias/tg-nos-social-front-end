import { useState } from 'react';
import { IComment } from '@/interfaces';
import { api } from '@/services/api';

export function useComments() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const getComments = async (postId: number): Promise<IComment[]> => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/comments`, {
        params: { postId },
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return [];
    }
  };

  const createComment = async (comment: Omit<IComment, 'id'>): Promise<IComment> => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/comments', comment);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      throw err;
    }
  };

  return { getComments, createComment, loading, error };
}