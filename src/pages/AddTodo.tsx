import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {ColorResult, CirclePicker} from 'react-color';



export default function AddTodo() {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()
  useEffect(() => {
    if (!cookies.token) {
      console.log("token invalid")
      navigate('/')
    }
  }, [cookies.token]);
  

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  const [selectedColor, setSelectedColor] = useState<string>('');
  const handleChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };
  
  const addtodo = () => {
    navigate('/todo')
  }

  return (
    <> 
    <div className="max-w-xl mx-auto my-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
            title
          </label>

          <input
            className="input input-bordered border rounded-full w-full mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]"
            id="title" type="text" 
          />
        </div>


        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="content">
            content
          </label>

          <input
            className="input input-bordered border rounded-full w-full mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]"
            id="content" type="text"
          />
        </div>


        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="deadline">
            deadline
          </label>

          <DatePicker 
            className="input input-bordered border rounded-full w-full mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            withPortal
            />
        </div>


        <div className="flex items-center justify-between">
          <div className="mb-12">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="tag">
              tag
            </label>

            <select className="select select-bordered rounded-full w-48 mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]">
            <option disabled selected></option>
            <option>study</option>
            </select>
          </div>

          <div className="mb-12">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="tagcolor">
              tagcolor
            </label>


            <div className="dropdown dropdown-hover flex items-center justify-center">
            <div 
            tabIndex={0} 
            role="button" 
            className="input input-bordered border rounded-full w-48 mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]"
            style={{ backgroundColor: selectedColor }}>
              {selectedColor} 
            </div>
            <ul tabIndex={0} 
            className="dropdown-content absolute translate-y-20">
            <CirclePicker color={selectedColor} onChange={handleChange}/>
            </ul>
            </div>
          </div>
          
        </div> 

        <div className="flex items-center justify-center">
          <div className="mb-6">
            <button 
            className="block text-gray-700 text-lg font-bold mb-2 input input-bordered border-black rounded-full w-40 mb-3 py-2 px-3"
            onClick={addtodo}>
            add todo
            </button>
          </div>
        </div>

      </form>
    </div>
    </>
  );
}
