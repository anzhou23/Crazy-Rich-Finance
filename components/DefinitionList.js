import React from 'react';

function DefinitionList({ title, definitions, setSelectedDefinition }) {
  return (
    <div id={`section-${title.toLowerCase()}`} className="py-8 flex items-center flex-col">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {definitions.map((definition) => (
          <div
            key={definition.id}
            className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={() => setSelectedDefinition(definition)}
          >
            <div className="mt-4 px-4 pb-2 flex justify-center items-center">
              <div>
                <h3 className="text-md text-gray-700 font-semibold text-center">
                  {definition.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DefinitionList;
