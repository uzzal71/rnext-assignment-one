import React from "react";

export default function StudentList({ data }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student) => (
          <React.Fragment key={student.resultId}>
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan="4">
                {student.class_name}
              </td>
            </tr>
            {student.results.map((item) => (
              <tr key={item.id} className="border-b border-[#7ECEB529]">
                <td className="p-5 text-sm md:text-xl">{item.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={item.avatar}
                      width="32"
                      height="32"
                      alt="John Smith"
                    />
                    <span className="whitespace-nowrap">{item.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item.score}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {item.percentage} %
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
