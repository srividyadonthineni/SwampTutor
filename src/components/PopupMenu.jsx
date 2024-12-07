import React, { useState } from "react";

const PopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-green-800 hover:text-green-600 font-medium"
      >
        {isOpen ? "Close About" : "About"}
      </button>

      {isOpen && (
        <div className="mt-2 w-80 bg-white shadow-md rounded">
            <p className="text-green-800 font-medium">
        Hello! SwampTutor is a tutoring service board specifically for UF students and tutors alike. 
        On SwapmTutors, you can post your tutoring scheduled in an accessible place for UF students 
        to discover your services. This service is only available to UF students/those with a ufl email.
            </p>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
