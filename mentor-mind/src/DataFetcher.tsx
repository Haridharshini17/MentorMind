import React, { useState, useEffect } from 'react';

// Define Post type
interface Post {
  id: number;
  title: string;
}

const DataFetcher: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup on unmount
    return () => {
      console.log('Component unmounted, cleanup done!');
    };
  }, []); // Empty dependency array ensures it runs only once

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
