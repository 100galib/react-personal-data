import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './components/common/contact/Contact';
import Home from './components/common/Home/Home';
import SinglePersonDetails from './components/common/Home/SinglePersonDetails';
import Post from './components/common/post/Post';
import Header from './components/Header/Header';

function App() {
  const router =  createBrowserRouter([
    {
      path: '/',
      element: <Header></Header>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Home></Home>
        },
        {
          path: '/contact',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Contact></Contact>
        },
        {
          path: '/post',
          element: <Post></Post>
        },
        {
          path: '/personal/:fakeId',
          loader: async ({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.fakeId}`)
          },
          element: <SinglePersonDetails></SinglePersonDetails>
        }
      ]
    },
    {
      path: '*',
      element: <div>Page Not Found 404</div>
    }
  ])
    return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
