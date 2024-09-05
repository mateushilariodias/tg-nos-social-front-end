import { useState } from 'react';
import { ILike } from '@/interfaces';
import { api } from '@/services/api';

export function useLikes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const getLikes = async (postId: number): Promise<ILike[]> => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/likes`, {
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

  return { getLikes, loading, error };
}