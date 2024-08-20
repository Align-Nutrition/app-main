"use client";
import useStuck from "@/lib/hooks/use-stuck";
import { Banner, Card, Dropdown, Progress } from "flowbite-react";
import { useRef } from "react";
import { HiDotsHorizontal, HiTrash } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";
import { ReactSortable } from "react-sortablejs";
import { twMerge } from "tailwind-merge";

const meals = [
  {
    id: 1,
    name: "Breakfast",
    calories: 700,
    proteins: 160,
    carbs: 120,
    fats: 20,
    notes: "These are the meal notes",
    items: [
      {
        id: 1,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
      {
        id: 2,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
    ],
  },
  {
    id: 2,
    name: "Snack",
    calories: 700,
    proteins: 160,
    carbs: 120,
    fats: 20,
    items: [
      {
        id: 3,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
      {
        id: 4,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Lunch",
    calories: 700,
    proteins: 160,
    carbs: 120,
    fats: 20,
    items: [
      {
        id: 5,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
      {
        id: 6,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
    ],
  },
  {
    id: 4,
    name: "Snack",
    calories: 700,
    proteins: 160,
    carbs: 120,
    fats: 20,
    items: [
      {
        id: 7,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
      {
        id: 8,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
      {
        id: 17,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
      {
        id: 18,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
    ],
  },
  {
    id: 5,
    name: "Dinner",
    calories: 700,
    proteins: 160,
    carbs: 120,
    fats: 20,
    items: [
      {
        id: 9,
        name: "Meal Item Meal Item Meal Item Meal Item Meal Item Meal Item Meal Item Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
      {
        id: 10,
        name: "Meal Item",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        servingQuantity: 1,
        servingUnit: "serving",
        calories: 350,
        proteins: 80,
        carbs: 60,
        fats: 10,
      },
    ],
  },
];

export default function Page() {
  const headerRef = useRef(null);
  const { isStuck } = useStuck({ elementRef: headerRef });

  return (
    <>
      <div
        ref={headerRef}
        className={twMerge(
          isStuck &&
            "lg:sticky lg:top-32 lg:bg-white lg:dark:bg-gray-900 lg:p-4 lg:border-b lg:border-gray-200 lg:dark:border-gray-700 lg:shadow-sm z-10",
          "flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-4 w-full"
        )}
      >
        <div
          className={twMerge(
            isStuck ? "gap-4" : "gap-2",
            "grid lg:grid-cols-4 grow text-xs"
          )}
        >
          <Progress
            progress={90}
            size={isStuck ? "md" : "lg"}
            color="green"
            textLabel="Calories"
            textLabelPosition="outside"
            labelText
            labelProgress
            progressLabelPosition="outside"
          />
          <Progress
            progress={45}
            size={isStuck ? "md" : "lg"}
            color="indigo"
            textLabel="Proteins"
            textLabelPosition="outside"
            labelText
            labelProgress
            progressLabelPosition="outside"
          />
          <Progress
            progress={25}
            size={isStuck ? "md" : "lg"}
            color="yellow"
            textLabel="Carbs"
            textLabelPosition="outside"
            labelText
            labelProgress
            progressLabelPosition="outside"
          />
          <Progress
            progress={65}
            size={isStuck ? "md" : "lg"}
            color="red"
            textLabel="Fats"
            textLabelPosition="outside"
            labelText
            labelProgress
            progressLabelPosition="outside"
          />
        </div>
        <Dropdown size="sm" label="Add to Nutrition">
          <Dropdown.Item>New Meal</Dropdown.Item>
          <Dropdown.Item>Import Meal Template</Dropdown.Item>
          <Dropdown.Item>Copy previous meal</Dropdown.Item>
        </Dropdown>
      </div>
      <ReactSortable
        animation={100}
        className="w-full"
        easing="cubic-bezier(1, 0, 0, 1)"
        forceFallback
        group="meals"
        handle=".drag"
        list={meals}
        setList={console.log}
      >
        {meals.map((meal) => (
          <Card
            key={meal.id}
            className="w-full shadow-none border-none rounded-none mb-6"
          >
            <div className="mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2">
                <div className="drag -ml-4 cursor-move">
                  <MdOutlineDragIndicator className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
                <hgroup>
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    {meal.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    350 cal, 80 proteins, 60 carbs, 10 fats
                  </span>
                </hgroup>
              </div>
              <Dropdown size="sm" color="gray" label={`Manage ${meal.name}`}>
                <Dropdown.Item>Search for food</Dropdown.Item>
                <Dropdown.Item>Add recipe</Dropdown.Item>
                <Dropdown.Item>Add custom macros</Dropdown.Item>
                <Dropdown.Item>Copy previous food</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Edit Name</Dropdown.Item>
                <Dropdown.Item>Change Notes</Dropdown.Item>
                <Dropdown.Item>Attach File</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiTrash}>Delete</Dropdown.Item>
              </Dropdown>
            </div>
            {meal.notes && (
              <Banner>
                <div className="flex w-full flex-col justify-between border-b border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-600 dark:bg-yellow-700 md:flex-row">
                  <p className="flex items-center text-sm font-normal text-yellow-500 dark:text-yellow-400">
                    {meal.notes}
                  </p>
                </div>
              </Banner>
            )}
            <div className="flow-root">
              <ul className="[&>div]:divide-y [&>div]:divide-gray-200 [&>div]:dark:divide-gray-700">
                <ReactSortable
                  animation={100}
                  forceFallback
                  group={`meal_${meal.id}_items`}
                  handle=".drag-item"
                  list={meal.items}
                  setList={console.log}
                >
                  {meal.items.map((mealItem) => (
                    <li
                      key={mealItem.id}
                      className="py-3 sm:py-4 bg-white dark:bg-gray-800"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="drag-item -mx-3 cursor-move">
                          <MdOutlineDragIndicator className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <picture className="shrink-0">
                          <img
                            alt="Neil image"
                            height="32"
                            src={mealItem.image}
                            width="32"
                            className="rounded-full"
                          />
                        </picture>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {mealItem.name}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            1 serving
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          350
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          80
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          60
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          10
                        </div>
                        <div>
                          <Dropdown
                            color="gray"
                            size="sm"
                            arrowIcon={false}
                            placement="left"
                            label={
                              <HiDotsHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            }
                          >
                            <Dropdown.Item>Edit Macros</Dropdown.Item>
                            <Dropdown.Item>Update Servings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Add Alternative</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item icon={HiTrash}>Delete</Dropdown.Item>
                          </Dropdown>
                        </div>
                      </div>
                    </li>
                  ))}
                </ReactSortable>
              </ul>
            </div>
          </Card>
        ))}
      </ReactSortable>
    </>
  );
}
