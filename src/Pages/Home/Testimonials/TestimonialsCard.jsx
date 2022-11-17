import React from "react";

const TestimonialsCard = ({ data }) => {
  const { name, info, img, address } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl  text-custom-slate border border-gray-100">
        <div className="card-body">
          <p>{info}</p>
          <div className="flex items-center space-x-2 mt-9">
            <img
              src={img}
              alt=""
              className="object-cover object-center w-16 h-16 rounded-full shadow-sm border-2 border-primary-sky"
            />
            <div className="-space-y-1">
              <h2 className="text-xl font-semibold leading-none">{name}</h2>
              <span className="inline-block text-xs leading-none dark:text-gray-400">
                {address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
