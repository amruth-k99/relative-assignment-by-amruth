import React, { Fragment } from "react";

interface Props {
  data: {
    id: number;
    title: string;
    price: string;
    percentage: number;
    tvl: number;
    popularPairs: Array<any>;
    image: string;
  };
}
export default function Card({ data }: Props) {
  // To get the data from the parent component, we can use the props object

  return (
    <div className="card rounded-xl border border-primary-border">
      {/* Title */}
      <div className="w-28 h-28 image-container relative -top-14 m-auto">
        <img
          className="m-auto w-24 image z-10 h-24 border border-primary-border rounded-full p-4 bg-primary-bg"
          src={data.image}
          alt={data.title}
        />
      </div>

      <div className="relative flex-1 -top-8">
        <h2 className="text-primary-text-dark tracking-wide text-xs font-semibold mb-4">
          {data.title}
        </h2>

        {/* Price */}
        <TextWrapper label="Price">
          <div className="bg-primary-bg rounded-2xl py-1 mx-5 mb-2">
            <div className="flex justify-center items-center">
              <p className="text-primary-text font-semibold opacity-90">
                $ {data.price}
              </p>
              <p
                className={`${
                  data.percentage > 0
                    ? "text-primary-green"
                    : "text-primary-red"
                } ml-3 font-semibold text-sm`}
              >
                {data.percentage}%
              </p>
            </div>
          </div>
        </TextWrapper>

        {/* TVL */}
        <TextWrapper label="TVL">
          <div className="bg-primary-bg rounded-2xl py-1 mx-5 mb-2">
            <div className="flex justify-center items-center">
              <p className="text-primary-text font-semibold opacity-90">
                $ {data.tvl}
              </p>
            </div>
          </div>
        </TextWrapper>

        {/* TVL */}
        <TextWrapper label="Popular Pairs">
          <div className="bg-primary-bg rounded-2xl py-1 mx-5 mb-2">
            <div className="flex justify-center m-auto">
              {data.popularPairs.map((img: string | undefined, key) => (
                <img
                  key={key}
                  className="w-6 h-6 mx-2 z-10 my-1"
                  src={img}
                  alt="Popular Pair"
                />
              ))}
            </div>
          </div>
        </TextWrapper>
      </div>
    </div>
  );
}

const TextWrapper = (props: any) => {
  // Most of the components have same bottom text, so we can create a sub-component for it
  return (
    <Fragment>
      {props.children}
      <p className="text-primary-text-dark-2 text-sm font-semibold mb-3">
        {props.label}
      </p>
    </Fragment>
  );
};
