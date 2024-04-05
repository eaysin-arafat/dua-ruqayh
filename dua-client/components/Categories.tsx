"use client";

import React, { useEffect, useState } from "react";
import Input from "./form-elements/Input";
import Image from "next/image";
import duaImg from "../public/dua01.png";
import { PiArrowBendDownRightThin } from "react-icons/pi";
import { getCategorys, getDuas, getSubCategories } from "@/lib/fetch-data";
import {
  CategoryType,
  DuaTyps,
  SubcategoryType,
} from "@/constant/duas-data-type";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const [subCategories, setSubCategories] = useState<SubcategoryType[] | []>(
    []
  );
  const [duas, setDuas] = useState<DuaTyps[] | []>([]);

  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<number | null>(null);

  const toggleCategoryDropdown = (index: number) => {
    setOpenCategory((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleSubCategoryDropdown = (index: number) => {
    setOpenSubCategory((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await getCategorys();
        setCategories(responseCategories);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await getSubCategories(1);
        setSubCategories(responseCategories);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await getDuas(1);
        setDuas(responseCategories);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, []);

  console.log(duas);
  return (
    <section className="bg-bgWhiteColor rounded-md">
      <div>
        <h2 className="bg-primaryColor rounded-md text-center py-4 text-bgWhiteColor font-semibold">
          Category
        </h2>
        <Input isIcon={false} className="mx-2 my-2 mb-3 " />

        <main className="space-y-4 max-h-[calc(100vh-250px)] overflow-auto">
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className="flex justify-between px-2 py-2 bg-bgWhiteColor shadow-sm hover:bg-bgGrayColor mx-2 rounded-md cursor-pointer"
                onClick={() => toggleCategoryDropdown(index)} // Call toggleDropdown with index
              >
                <div className="flex gap-3">
                  <div className="bg-bgWhiteColor p-2 flex items-center justify-center rounded-md">
                    <Image
                      src={duaImg}
                      width={25}
                      height={15}
                      alt=""
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">
                      {category?.cat_name_en}
                    </h3>
                    <p className="text-sm">
                      Subcategory: {category?.no_of_subcat}
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-grayColor pl-2">
                  <h3 className="text-base font-medium">
                    {category?.no_of_dua}
                  </h3>
                  <p className="text-sm">Duas</p>
                </div>
              </div>

              {openCategory === index && ( // Only render if current item is open
                <div className="border-l-2 border-dotted border-primaryColor ml-8 relative space-y-3 pt-2">
                  {subCategories?.map((subCategory, index) => (
                    <>
                      <p
                        className="px-3 text-base font-medium cursor-pointer"
                        onClick={() => toggleSubCategoryDropdown(index)}
                      >
                        <span className="absolute left-[-4px] bg-primaryColor h-1.5 w-1.5 rounded-full mt-2"></span>
                        {subCategory?.subcat_name_en}
                      </p>

                      <div className="space-y-3">
                        {openSubCategory === index &&
                          duas?.map((dua, index) => (
                            <div
                              key={index}
                              className="flex gap-1 items-center m-2.5 cursor-pointer"
                            >
                              <div className="min-w-8">
                                <PiArrowBendDownRightThin size={24} />
                              </div>
                              <p className="text-sm font-medium pr-2.5">
                                {dua?.dua_name_en}
                              </p>
                            </div>
                          ))}
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Categories;
