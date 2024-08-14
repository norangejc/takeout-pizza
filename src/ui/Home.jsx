import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const user = useSelector(state=> state.user.username)

  return (
    <div className=" my-10  px4 sm:my-16 text-center mt-10">
      <h1 className="mb-10 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
     {user ==="" ?  <CreateUser /> : <Button to="/menu" type='primary'>Go to the menu →</Button>} 
    </div>
  );
}

export default Home;
