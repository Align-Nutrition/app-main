"use client";
import { Banner, Card, Dropdown } from "flowbite-react";
import { HiDotsHorizontal, HiTrash } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";
import { ReactSortable } from "react-sortablejs";

const workouts = [
  {
    id: 0,
    name: "Daily Warmup",
    dayOfWeek: "Everyday",
    notes:
      "Complete this warm up at your own pace each day before your main workout",
    items: [
      {
        id: 1,
        name: "Barbell Bench Press",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/2aeedd93-d0a2-4a32-8ad0-6ced763cfb75/Wide-Grip_Barbell_Bench_Press%20-%20Starting%20position.jpg",
      },
      {
        id: 2,
        name: "Incline Dumbell Fly",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/71edfaf1-6f3a-47e6-9463-918d60cc3956/Incline_Dumbbell_Flyes%20-%20Starting%20position.jpg",
      },
      {
        id: 3,
        name: "Tricep Pushdown",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/0d3dc903-eb40-4332-a9d6-ef577f57fb5b/Triceps_Pushdown%20-%20Starting%20position.jpg",
      },
    ],
  },
  {
    id: 1,
    name: "Chest & Tri",
    dayOfWeek: "Monday",
    items: [
      {
        id: 1,
        name: "Barbell Bench Press",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/2aeedd93-d0a2-4a32-8ad0-6ced763cfb75/Wide-Grip_Barbell_Bench_Press%20-%20Starting%20position.jpg",
      },
      {
        id: 2,
        name: "Incline Dumbell Fly",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/71edfaf1-6f3a-47e6-9463-918d60cc3956/Incline_Dumbbell_Flyes%20-%20Starting%20position.jpg",
      },
      {
        id: 3,
        name: "Tricep Pushdown",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/0d3dc903-eb40-4332-a9d6-ef577f57fb5b/Triceps_Pushdown%20-%20Starting%20position.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Back & Bi",
    dayOfWeek: "Tuesday",
    items: [
      {
        id: 1,
        name: "Bent Over Barbell Row",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/595e7c86-45ee-483e-a900-9a4e0fda802e/Bent_Over_Barbell_Row%20-%20Starting%20position.jpg",
      },
      {
        id: 2,
        name: "Single Arm Dumbell Row",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/2aeedd93-d0a2-4a32-8ad0-6ced763cfb75/Wide-Grip_Barbell_Bench_Press%20-%20Starting%20position.jpg",
      },
      {
        id: 3,
        name: "Lat Pulldown",
        image:
          "https://ypvwjorbtywjazyctapq.supabase.co/storage/v1/object/public/exercise_media/5d888749-2db3-4f1b-9724-1aeb6f84ed30/Close-Grip_Front_Lat_Pulldown%20-%20Starting%20position.jpg",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <div className="self-end">
        <Dropdown size="sm" label="Add to Fitness">
          <Dropdown.Item>New Workout</Dropdown.Item>
          <Dropdown.Item>Start Workout Program</Dropdown.Item>
          <Dropdown.Item>Import Workout Template</Dropdown.Item>
          <Dropdown.Item>Copy Previous Workout</Dropdown.Item>
        </Dropdown>
      </div>
      <ReactSortable
        animation={100}
        className="w-full"
        easing="cubic-bezier(1, 0, 0, 1)"
        forceFallback
        group="workouts"
        handle=".drag"
        list={workouts}
        setList={console.log}
      >
        {workouts.map((workout) => (
          <Card
            key={workout.id}
            className="w-full shadow-none border-none rounded-none mb-6"
          >
            <div className="mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2">
                <div className="drag -ml-4 cursor-move">
                  <MdOutlineDragIndicator className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
                <hgroup>
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    {workout.name}
                  </h5>
                  {workout.dayOfWeek && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {workout.dayOfWeek}
                    </span>
                  )}
                </hgroup>
              </div>
              <Dropdown size="sm" color="gray" label={`Manage ${workout.name}`}>
                <Dropdown.Item>Search for exercise</Dropdown.Item>
                <Dropdown.Item>Add custom exercise</Dropdown.Item>
                <Dropdown.Item>Copy previous exercise</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Edit Name</Dropdown.Item>
                <Dropdown.Item>Change Notes</Dropdown.Item>
                <Dropdown.Item>Attach File</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiTrash}>Delete</Dropdown.Item>
              </Dropdown>
            </div>
            {workout.notes && (
              <Banner>
                <div className="flex w-full flex-col justify-between border-b border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-600 dark:bg-yellow-700 md:flex-row">
                  <p className="flex items-center text-sm font-normal text-yellow-500 dark:text-yellow-400">
                    {workout.notes}
                  </p>
                </div>
              </Banner>
            )}
            <div className="flow-root">
              <ul className="[&>div]:divide-y [&>div]:divide-gray-200 [&>div]:dark:divide-gray-700">
                <ReactSortable
                  animation={100}
                  forceFallback
                  group={`workout_${workout.id}_items`}
                  handle=".drag-item"
                  list={workout.items}
                  setList={console.log}
                >
                  {workout.items.map((exercise) => (
                    <li
                      key={exercise.id}
                      className="py-3 sm:py-4 bg-white dark:bg-gray-800"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="drag-item -mx-3 cursor-move">
                          <MdOutlineDragIndicator className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div className="shrink-0">
                          <picture>
                            <img
                              alt="exercise"
                              height="64"
                              src={exercise.image}
                              width="64"
                            />
                          </picture>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {exercise.name}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            8 RPE - Slow Tempo
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          3 sets
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          10 reps
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
                            <Dropdown.Item>Edit Sets & Reps</Dropdown.Item>
                            <Dropdown.Item>Change RPE</Dropdown.Item>
                            <Dropdown.Item>Change Tempo</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Add Alternative</Dropdown.Item>
                            <Dropdown.Item>Add Superset</Dropdown.Item>
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
