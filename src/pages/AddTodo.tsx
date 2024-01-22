import { useNavigate } from "react-router-dom";
import { SetStateAction, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { ChangeEvent, useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select'
import { ColorResult, CirclePicker } from 'react-color';
import axios from "axios";

interface ApiResponse {
  message?: string;
}


export default function AddTodo() {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate()
  useEffect(() => {
    if (!cookies.token) {
      console.log("token invalid")
      navigate('/')
    }
  }, [cookies.token]);

  const [responseMessage, setResponseMessage] = useState<string>('');

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [tag_color, setTagColor] = useState<string>();
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, deadline] = dateRange;

  const members = [
    { value: 'member', label: 'member' },
  ]

  const tags = [
    { value: 'test', label: 'Test' },
    { value: 'homework', label: 'Homework' },
    { value: 'work', label: 'Work' },
    { value: 'else', label: 'Else' },
  ]
  const handleChange = (color: ColorResult) => {
    setTagColor(color.hex);
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setTitle(e.target.value);
  };
  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setContent(e.target.value);
  };
  const handleTagChange = (selectedOption: any) => {
    if (selectedOption) {
      console.log(selectedOption.label);
      setTag(selectedOption.label);
    }
    else {
      setTag("Else")
    }
  };

  const addtodo = async () => {

    try {
      const response = await axios.post<ApiResponse>('http://localhost:8080/auth/todo', {
        title,
        content,
        deadline,
        tag,
        tag_color,
      }, {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : '',
        },
      });

      if (response.status === 201) {
        const data = response.data;
        console.log(data)
        navigate('/todo')
      } else {
        if (response.data && response.data.message) {
          setResponseMessage(`Failed: ${response.data.message}`);
        } else {
          setResponseMessage(`Failed: ${response.statusText}`);
        }
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setResponseMessage(`Failed: ${error.response.data.message}`);
      } else {
        setResponseMessage('Failed');
      }
    }
  };
  return (
    <>
      <div className="max-w-2xl mx-auto my-8">
        <div className="bg-[#FFFFFF] border border-[#D3D3D3] rounded px-8 pt-6 pb-8 mb-6 ">

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
              title
            </label>

            <input
              className="input input-bordered border rounded-full w-full mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]" onChange={handleTitleChange}
            />
          </div>


          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="content">
              content
            </label>

            <input
              className="input input-bordered border rounded-full w-full mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]" onChange={handleContentChange}
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
              endDate={deadline}
              onChange={(update) => {
                setDateRange(update);
              }}
              withPortal
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="member">
              member
            </label>

            <Select
              unstyled
              isMulti
              closeMenuOnSelect={false}
              options={members}
              placeholder=""
              className="input input-bordered border rounded-full w-full mb-3 py-1 px-3 text-gray-700 bg-[#D3D3D3]"
              styles={{
                menu: (baseStyles) => ({
                  ...baseStyles,
                  background: '#E0E0E0',
                  width: 580
                })
              }}
            />

          </div>

          <div className="flex items-center justify-between">
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="tag">
                tag
              </label>

              <Select
                unstyled
                options={tags}
                placeholder=""
                className="input input-bordered border rounded-full w-60 mb-3 py-1 px-3 text-gray-700 bg-[#D3D3D3]"
                styles={{
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    background: '#E0E0E0',
                    width: 210
                  })
                }}
                onChange={(e) => handleTagChange(e)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="tagcolor">
                tagcolor
              </label>

              <div className="dropdown dropdown-hover flex items-center justify-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="input input-bordered border rounded-full w-60 mb-3 py-2 px-3 text-gray-700 bg-[#D3D3D3]"
                  style={{ backgroundColor: tag_color }}>
                  {tag_color}
                </div>
                <ul tabIndex={0}
                  className="dropdown-content absolute translate-y-20">
                  <CirclePicker color={tag_color} onChange={handleChange} />
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around">
            <div className="mb-2">
              <p>{responseMessage}</p>
              <button
                className="block text-gray-700 text-lg font-bold mb-2 input input-bordered border-black rounded-full w-40 mb-3 py-2 px-3"
                onClick={addtodo}>
                add todo
              </button>
              <button
                className="block text-gray-700 text-lg font-bold mb-2 input input-bordered border-black rounded-full w-40 mb-3 py-2 px-3 btn-active"
                onClick={() => navigate('/todo')}>
                cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
