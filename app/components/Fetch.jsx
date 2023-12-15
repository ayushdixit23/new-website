import React from "react";

const Fetch = ({ order }) => {
  return (
    <div className="my-6 overflow-x-scroll max-w-[900px]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider col-span-3">
              Order
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider col-span-3">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {order.map((d, i) => (
            <tr key={i} className="">
              <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900 col-span-3">
                {d?.SocialMedia}
              </td>
              <td className="px-6 py-4 text-sm leading-5">{d?.category}</td>
              <td className="px-6 py-4 text-sm leading-5">{d?.Count}</td>
              <td className="px-6 py-4 text-sm leading-5">{d?.price}</td>
              <td className="px-6 py-4 text-sm leading-5">{d?.status}</td>
            </tr>
          ))}

          {/* <tr className="">
		  <td className="px-6 py-4 text-sm leading-5 font-medium text-gray-900 col-span-3">
			Data 5
		  </td>
		  <td className="px-6 py-4 text-sm leading-5">Data 6</td>
		  <td className="px-6 py-4 text-sm leading-5">Data 7</td>
		  <td className="px-6 py-4 text-sm leading-5">Data 8</td>
		</tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Fetch;
