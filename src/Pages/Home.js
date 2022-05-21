import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>Hello! This is app for creating and saving your phonebook contacts. 
      <p>Please <Link to="/register">register</Link> or <Link to="/login">login</Link></p></div>

      
    </>
  );
}
