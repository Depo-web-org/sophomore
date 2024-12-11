import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import UserOne from '../../images/user/user-01.png';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
         <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>
        <span className="hidden text-right lg:block bg-emerald-400">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
        </span>

      </Link>

    </ClickOutside>
  );
};

export default DropdownUser;
