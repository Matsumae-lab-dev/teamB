import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const navigate = useNavigate()
  return (
    <>
    <div className= "bg-[#AAD9BB] flex justify-around">
      <div></div>
      <h2 className="text-4xl" >TO DO</h2>
      <button className= "btn m-2" onClick={() => navigate('/new')}>  +  </button>
      
      </div>
    </>
  );
}
