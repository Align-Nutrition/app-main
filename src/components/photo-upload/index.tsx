"use client";

import { Avatar, Button } from "flowbite-react";
import { useState } from "react";

type PhotoUploadPropType = {
  name: string;
  photoAlt?: string;
  defaultPhotoUrl?: string;
};

export default function PhotoUpload({
  defaultPhotoUrl,
  name,
  photoAlt,
}: PhotoUploadPropType) {
  const [photoUrl, setPhotoUrl] = useState(defaultPhotoUrl);

  return (
    <div>
      <input name={name} type="hidden" value={photoUrl || ""} />
      {photoUrl && (
        <Avatar
          alt={photoAlt || name}
          img={photoUrl}
          rounded
          size="lg"
          className="mb-4 justify-start"
        />
      )}
      <div className="w-full">
        <input
          className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
          aria-describedby="profile_photo_help"
          id="profile_photo"
          type="file"
          accept="image/*,.svg"
          readOnly
        />
        <p
          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
          id="profile_photo_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </div>
      {photoUrl && (
        <div className="mt-4 flex items-center space-x-2.5">
          <Button
            size="sm"
            className="inline-flex items-center [&>span]:text-xs"
          >
            <svg
              aria-hidden
              className="-ml-1 mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Upload new picture
          </Button>
          <Button
            color="alt"
            size="sm"
            className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 [&>span]:text-xs"
            onClick={() => setPhotoUrl(undefined)}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
