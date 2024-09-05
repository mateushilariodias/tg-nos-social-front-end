import { useState, useEffect } from 'react';

export function useFeed() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/feed'); // Ajuste para o endpoint correto
        const data = await response.json();
        setPosts(data.posts);
        setComments(data.comments);
        setLikes(data.likes);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  return { posts, comments, likes, loading, error };
}