import { useState, useEffect } from 'react';
import * as hootService from '../../services/hootService';

const HootDetails = (props) => {
    const [hoot, setHoot] = useState(null);
  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId);
      console.log('hootData', hootData);
      setHoot(hootData);
    };
    fetchHoot();
  }, [hootId]);
  
  return (
    <main>
      <header>
        <p>{hoot.category.toUpperCase()}</p>
        <h1>{hoot.title}</h1>
        <p>
          {hoot.author.username} posted on
          {new Date(hoot.createdAt).toLocaleDateString()}
        </p>
      </header>
      <p>{hoot.text}</p>
      <section>
        <h2>Comments</h2>
      </section>
    </main>
  );
  };

  
  // Verify that hoot state is being set correctly:


  
  export default HootDetails;