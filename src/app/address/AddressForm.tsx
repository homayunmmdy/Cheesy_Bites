import { AddressData } from "@/models/AddressData";

type SubmitAddressProps = AddressData & {
  updateFields: (fileds: Partial<AddressData>) => void;
};

const SubmitAddress = ({
  name,
  street,
  city,
  zip,
  updateFields,
}: SubmitAddressProps) => {
  return (
    <div>
      <input
        type="text"
        autoFocus
        required
        placeholder="John dev"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
      />
      <input
        type="text"
        autoFocus
        required
        placeholder="Address"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
      />

      <div className="flex">
        <div className="flex-grow w-1/2 sm:w-1/4 pr-2">
          <input
            type="text"
            autoFocus
            required
            value={zip}
            onChange={(e) => updateFields({ zip: e.target.value })}
            placeholder="Zip code"
            className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            autoFocus
            required
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            placeholder="City"
            className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center pt-3"><input type="checkbox" className="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"/><label htmlFor="safeAdress" className="block ml-2 text-sm text-gray-900">Save as default address</label></div>
    </div>
  );
};

export default SubmitAddress;
