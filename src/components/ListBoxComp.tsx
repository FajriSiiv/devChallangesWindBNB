import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";

const people = [
  { name: "Helsinki, Finland" },
  { name: "Turku, Finland" },
  { name: "Devon Webb" },
  { name: "Oulu, Finland" },
  { name: "Vaasa, Finland" },
];

const numberPeps = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ListBoxComp() {
  const [selected, setSelected] = useState(people[0]);
  const [numberPep, setNumberPep] = useState(numberPeps[0]);

  return (
    <div className="w-72 mx-auto rounded-xl md:flex md:w-full px-5 md:gap-x-2">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 md:w-1/2">
          <Listbox.Button className="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border-b h-16 rounded-t-lg md:rounded-none">
            <label className="text-xs font-bold">Location</label>
            <span className="flex items-center gap-x-2 truncate">
              <IoLocation />
              {selected.name}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <BsCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                          <IoLocation className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <Listbox value={numberPep} onChange={setNumberPep}>
        <div className="relative md:w-1/3">
          <Listbox.Button className="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  rounded-b-lg h-16 md:rounded-none">
            <label className="text-xs font-bold">Guests</label>
            <span className="truncate flex items-center gap-x-2">
              <IoMdPerson />
              {numberPep}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {numberPeps.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <BsCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                          <IoMdPerson className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
