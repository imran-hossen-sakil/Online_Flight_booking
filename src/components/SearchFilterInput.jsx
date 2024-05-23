import React, { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';


const SearchFilterInput = ({ options, placeholder='Search...', onChangeHandler}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isShow, setIsShow] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsShow(true);
    onChangeHandler(e.target.value)
  };

  const filteredOptions = options?.filter(option =>
    option?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fillFilterInput = (option) => {
    setSearchTerm(option);
    setIsShow(false);
    onChangeHandler(option)
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-col items-start relative w-full' ref={dropdownRef}>
      <Input
        className="w-full"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={() => setIsShow(true)}
        placeholder={placeholder}
      />
      {isShow && (
        <ul className='text-start absolute top-10 bg-white w-full h-60 overflow-y-auto border border-gray-300'>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => fillFilterInput(option)}
                className='py-3 px-2 hover:bg-gray-300 mb-1 cursor-pointer'
              >
                {option}
              </li>
            ))
          ) : (
            <li className='py-3 px-2'>No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchFilterInput;
