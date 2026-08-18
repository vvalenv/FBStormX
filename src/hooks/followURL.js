import { useNavigate } from 'react-router-dom';
export const useFollowURL = () => {
  const navigate = useNavigate();
  const followURL = (url) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    navigate(url);
  };

  return followURL;
}