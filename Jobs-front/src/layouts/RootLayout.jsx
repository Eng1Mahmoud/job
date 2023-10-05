import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Register from '../pages/Register';
import { useSelector } from 'react-redux';
const RootLayout = () => {
  const openModelSignUp = useSelector(state => state.global.openModelSignUp)
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      {
        openModelSignUp && <Register/>
      }
    
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
