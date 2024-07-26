"use client";

import { Button, Timeline, theme } from "flowbite-react";
import { BsApple } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";
import { IoBarbellOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export function ActivityTimeline() {
  return (
    <Timeline>
      <Timeline.Item className="group">
        <Timeline.Point
          icon={IoBarbellOutline}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-indigo-600 dark:text-indigo-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-indigo-200 ring-gray-50 dark:bg-indigo-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 12:13pm</Timeline.Time>
          <Timeline.Title>Completed Chest Day Workout</Timeline.Title>
          <Timeline.Body>32 reps, 2,500 lbs total weight lifted</Timeline.Body>
          <div className="flex items-center gap-2">
            <Button color="gray" className="mt-2">
              Exercise Log
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
            <Button color="gray" className="mt-2 hidden group-hover:block">
              Congratulate
              <HiOutlineTrophy className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={BsApple}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-green-600 dark:text-green-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-green-200 ring-gray-50 dark:bg-green-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 8:13pm</Timeline.Time>
          <Timeline.Title>Tracked Breakfast meal</Timeline.Title>
          <Timeline.Body>
            200 Caloires, 30 Proteins, 45 Carbs, 10 Fats
          </Timeline.Body>
          <Button color="gray" className="mt-2">
            Food Tracked
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={IoMdCheckmark}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-amber-600 dark:text-amber-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-amber-200 ring-gray-50 dark:bg-amber-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 6:30pm</Timeline.Time>
          <Timeline.Title>Completed Drink 1 gallon of water</Timeline.Title>
          <Button color="gray" className="mt-2">
            Show History
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={IoBarbellOutline}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-indigo-600 dark:text-indigo-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-indigo-200 ring-gray-50 dark:bg-indigo-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 12:13pm</Timeline.Time>
          <Timeline.Title>Completed Chest Day Workout</Timeline.Title>
          <Timeline.Body>32 reps, 2,500 lbs total weight lifted</Timeline.Body>
          <Button color="gray" className="mt-2">
            Exercise Log
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={BsApple}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-green-600 dark:text-green-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-green-200 ring-gray-50 dark:bg-green-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 8:13pm</Timeline.Time>
          <Timeline.Title>Tracked Breakfast meal</Timeline.Title>
          <Timeline.Body>
            200 Caloires, 30 Proteins, 45 Carbs, 10 Fats
          </Timeline.Body>
          <Button color="gray" className="mt-2">
            Food Tracked
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={IoMdCheckmark}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-amber-600 dark:text-amber-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-amber-200 ring-gray-50 dark:bg-amber-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 6:30pm</Timeline.Time>
          <Timeline.Title>Completed Drink 1 gallon of water</Timeline.Title>
          <Button color="gray" className="mt-2">
            Show History
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={IoBarbellOutline}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-indigo-600 dark:text-indigo-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-indigo-200 ring-gray-50 dark:bg-indigo-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 12:13pm</Timeline.Time>
          <Timeline.Title>Completed Chest Day Workout</Timeline.Title>
          <Timeline.Body>32 reps, 2,500 lbs total weight lifted</Timeline.Body>
          <Button color="gray" className="mt-2">
            Exercise Log
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={BsApple}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-green-600 dark:text-green-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-green-200 ring-gray-50 dark:bg-green-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 8:13pm</Timeline.Time>
          <Timeline.Title>Tracked Breakfast meal</Timeline.Title>
          <Timeline.Body>
            200 Caloires, 30 Proteins, 45 Carbs, 10 Fats
          </Timeline.Body>
          <Button color="gray" className="mt-2">
            Food Tracked
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={IoMdCheckmark}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-amber-600 dark:text-amber-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-amber-200 ring-gray-50 dark:bg-amber-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 6:30pm</Timeline.Time>
          <Timeline.Title>Completed Drink 1 gallon of water</Timeline.Title>
          <Button color="gray" className="mt-2">
            Show History
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={IoBarbellOutline}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-indigo-600 dark:text-indigo-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-indigo-200 ring-gray-50 dark:bg-indigo-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 12:13pm</Timeline.Time>
          <Timeline.Title>Completed Chest Day Workout</Timeline.Title>
          <Timeline.Body>32 reps, 2,500 lbs total weight lifted</Timeline.Body>
          <Button color="gray" className="mt-2">
            Exercise Log
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={BsApple}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-green-600 dark:text-green-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-green-200 ring-gray-50 dark:bg-green-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 8:13pm</Timeline.Time>
          <Timeline.Title>Tracked Breakfast meal</Timeline.Title>
          <Timeline.Body>
            200 Caloires, 30 Proteins, 45 Carbs, 10 Fats
          </Timeline.Body>
          <Button color="gray" className="mt-2">
            Food Tracked
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point
          icon={IoMdCheckmark}
          theme={{
            marker: {
              icon: {
                base: twMerge(
                  theme.timeline.item.point.marker.icon.base,
                  "text-amber-600 dark:text-amber-300"
                ),
                wrapper: twMerge(
                  theme.timeline.item.point.marker.icon.wrapper,
                  "bg-amber-200 ring-gray-50 dark:bg-amber-900 dark:ring-gray-900"
                ),
              },
            },
          }}
        />
        <Timeline.Content>
          <Timeline.Time>February 2nd @ 6:30pm</Timeline.Time>
          <Timeline.Title>Completed Drink 1 gallon of water</Timeline.Title>
          <Button color="gray" className="mt-2">
            Show History
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
