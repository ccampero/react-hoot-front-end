import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const HootList = (props) => {

    const { hootId } = useParams();
console.log('hootId', hootId);

    return (
        <main>
          {props.hoots.map((hoot) => (
            <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
              <article>
                <header>
                  <h2>{hoot.title}</h2>
                  <p>
                    {hoot.author.username} posted on 
                    {new Date(hoot.createdAt).toLocaleDateString()}
                  </p>
                </header>
                <p>{hoot.text}</p>
              </article>
            </Link>
          ))}
        </main>
      );
  };

  export default HootList;