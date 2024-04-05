import {
  CategoryType,
  DuaTyps,
  SubcategoryType,
} from "@/constant/duas-data-type";
import { getCategorys, getDuas, getSubCategories } from "@/lib/fetch-data";
import React from "react";

const useData = ({
  categoryId,
  subCategoryId,
}: {
  categoryId: number;
  subCategoryId: number;
}) => {
  const [categories, setCategories] = React.useState<CategoryType[] | []>([]);
  const [subCategories, setSubCategories] = React.useState<
    SubcategoryType[] | []
  >([]);
  const [duas, setDuas] = React.useState<DuaTyps[] | []>([]);

  React.useEffect(() => {
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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await getSubCategories(categoryId);
        setSubCategories(responseCategories);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategories = await getDuas(subCategoryId);
        setDuas(responseCategories);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return { duas, categories, subCategories };
};

export default useData;
