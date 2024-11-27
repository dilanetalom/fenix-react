import React, { useState } from 'react'



interface Option {
    label: string;
    value: string;
}

interface propsinput {
    options: Option[];
    first:string
}



const InputComponent:React.FC<propsinput> = ({options,first}) => {

    const [selectedOption, setSelectedOption] = useState<Option>();
    // const [selectedOption, setSelectedOption] = useState([]);
   

    const [isOpen, setIsOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
        setSearchTerm(''); // Reset search term on selection
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
   
    <div className="relative ">
    <div
        onClick={toggleDropdown}
        className="border border-gray-300 rounded-lg p-2  h-[58px] cursor-pointer bg-white flex justify-between items-center"
    >
        <span>{selectedOption ? selectedOption.label : first}</span>
        <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </div>
    {isOpen && (
        <div className="absolute z-10   w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            <input
                type="text"
                placeholder="Search..."
                className="p-2 w-full border-b border-gray-300 h-[58px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="max-h-60 overflow-auto">
                {filteredOptions.length > 0 ? (
                    filteredOptions.map(option => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                        >
                            {option.label}
                        </li>
                    ))
                ) : (
                    <li className="p-2 text-gray-500">No options found</li>
                )}
            </ul>
        </div>
    )}
</div>
  )
}

export default InputComponent
