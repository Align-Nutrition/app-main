"use client";
import { useUserContext } from "@/lib/contexts/user-context";
import formatAsCurrency from "@/lib/utils/format-as-currency";
import getStripe from "@/lib/utils/get-stripe-client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { Drawer, Tabs, theme, ToggleSwitch } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiMoneyBill } from "react-icons/ci";
import { twMerge } from "tailwind-merge";

export default function Page() {
  const { email } = useUserContext();
  const [clientSecret, setClientSecret] = useState();
  const [activeTab, setActiveTab] = useState("Coach");
  const [duration, setDuration] = useState("monthly");
  const searchParams = useSearchParams();
  const businessId = searchParams.get("business_id");

  const pricingOptions = [
    {
      details: "The ideal solution for new coaches and side hustles.",
      name: "Coach",
      prices: [
        {
          duration: "monthly",
          price: 97.0,
          id: "1",
        },
        {
          duration: "annually",
          price: 997.0,
          id: "2",
        },
      ],
      features: [
        {
          term: "Clients",
          definition: "Up to 20",
        },
        {
          term: "Monthly Broadcasts",
          definition: "Up to 60",
        },
        {
          term: "In-app Messaging",
          definition: "Unlimited",
        },
        {
          term: "Meal Templates",
          definition: "Up to 200",
        },
        {
          term: "Workout Templates",
          definition: "Up to 200",
        },
      ],
    },
    {
      details: "Perfect for coaches ready to run full-time.",
      name: "Expert",
      prices: [
        {
          duration: "monthly",
          price: 197.0,
          id: "price_1NAkLuApdwT2qmNQPRktYKUj",
        },
        {
          duration: "annually",
          price: 2197.0,
          id: "price_1NAkLuApdwT2qmNQ7lELTPtE",
        },
      ],
      features: [
        {
          term: "Clients",
          definition: "Up to 49",
        },
        {
          term: "Monthly Broadcasts",
          definition: "Up to 120",
        },
        {
          term: "In-app Messaging",
          definition: "Unlimited",
        },
        {
          term: "Meal Templates",
          definition: "Unlimited",
        },
        {
          term: "Workout Templates",
          definition: "Unlimited",
        },
      ],
    },
    {
      details: "All the tools necessary to scale a coaching company.",
      name: "Pro",
      prices: [
        {
          duration: "monthly",
          price: 297.0,
          id: "3",
        },
        {
          duration: "annually",
          price: 3497.0,
          id: "3",
        },
      ],
      features: [
        {
          term: "Clients",
          definition: "Unlimited",
        },
        {
          term: "Monthly Broadcasts",
          definition: "Unlimited",
        },
        {
          term: "In-app Messaging",
          definition: "Unlimited",
        },
        {
          term: "Meal Templates",
          definition: "Unlimited",
        },
        {
          term: "Workout Templates",
          definition: "Unlimited",
        },
      ],
    },
    {
      details: "Build your fitness empire with!",
      name: "Enterprise",
      prices: [
        {
          duration: "monthly",
          price: 497.0,
          id: "3",
        },
        {
          duration: "annually",
          price: 4997.0,
          id: "3",
        },
      ],
      features: [
        {
          term: "Trainers",
          definition: "20",
        },
        {
          term: "Clients",
          definition: "Unlimited",
        },
        {
          term: "Monthly Broadcasts",
          definition: "Unlimited",
        },
        {
          term: "In-app Messaging",
          definition: "Unlimited",
        },
        {
          term: "Meal Templates",
          definition: "Unlimited",
        },
        {
          term: "Workout Templates",
          definition: "Unlimited",
        },
      ],
    },
  ];

  const selectedPricingOption = pricingOptions
    .map((option) => ({
      ...option,
      price: option.prices.find((price) => price.duration === duration),
    }))
    .find((option) => option.name === activeTab);

  const handleCreateClientSecret = async () =>
    fetch(`/api/stripe/create-checkout-session`, {
      method: "POST",
      body: JSON.stringify({
        customer_email: email,
        price_id: selectedPricingOption?.price?.id,
        business_id: businessId,
        origin: window.location.origin,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error;
        return res.clientSecret;
      })
      .then(setClientSecret);

  return (
    <>
      <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:mb-6">
        Select a plan
      </h1>
      <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">
        If the plans below do not work for you, contact us for a bespoke option.
      </p>
      {clientSecret && (
        <Drawer
          open
          onClose={() => setClientSecret(undefined)}
          theme={{
            header: {
              inner: {
                titleText: twMerge(
                  theme.drawer.header.inner.titleText,
                  "mb-0 text-xl font-semibold text-gray-900 dark:text-white"
                ),
              },
            },
          }}
        >
          <Drawer.Header title="Checkout" titleIcon={CiMoneyBill} />
          <Drawer.Items>
            <EmbeddedCheckoutProvider
              stripe={getStripe()}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </Drawer.Items>
        </Drawer>
      )}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <Tabs
            onClick={() => {
              window.setTimeout(() => {
                setActiveTab(
                  document.querySelector("[aria-selected=true]")?.innerHTML ??
                    ""
                );
              }, 50);
            }}
            style="fullWidth"
            theme={{
              tablist: {
                styles: {
                  fullWidth:
                    "grid w-full grid-flow-col divide-x divide-gray-200 rounded-lg text-sm font-medium shadow dark:divide-gray-500 dark:text-gray-400",
                },
                tabitem: {
                  base: twMerge(
                    theme.tabs.tablist.tabitem.base,
                    "dark:focus:ring-0"
                  ),
                  styles: {
                    fullWidth: {
                      active: {
                        on: "active rounded-none border border-gray-200 bg-gray-100 p-4 text-gray-900 first:rounded-l-lg last:rounded-r-lg dark:border-gray-500 dark:bg-gray-600 dark:text-white",
                        off: "rounded-none border border-gray-200 bg-white first:rounded-l-lg last:rounded-r-lg hover:bg-gray-50 hover:text-gray-700 dark:border-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white",
                      },
                    },
                  },
                },
              },
            }}
          >
            {pricingOptions.map((pricingOption) => (
              <Tabs.Item key={pricingOption.name} title={pricingOption.name}>
                <div className="grid gap-4">
                  <div>
                    <p className="mt-2 font-medium text-gray-900 dark:text-white">
                      {`${pricingOption.name} details:`}
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      {pricingOption.details}
                    </p>
                  </div>
                  <dl className="grid grid-cols-2 gap-4">
                    {pricingOption.features.map((feature) => (
                      <div key={feature.term} className="grid gap-1">
                        <dt className="text-xs text-gray-500 dark:text-gray-400">
                          {feature.term}
                        </dt>
                        <dd className="text-sm font-medium">
                          {feature.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Tabs.Item>
            ))}
          </Tabs>
        </div>
        <div className="flex">
          <div className="w-full self-center">
            <div className="flex items-center mb-4 justify-center">
              <span
                className={twMerge(
                  duration === "monthly"
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400",
                  "text-base font-medium"
                )}
              >
                Monthly
              </span>
              <div className="mx-3">
                <ToggleSwitch
                  checked={duration === "annually"}
                  color="cyan"
                  label=""
                  onChange={() =>
                    setDuration((prevState) =>
                      prevState === "monthly" ? "annually" : "monthly"
                    )
                  }
                />
              </div>
              <span
                className={twMerge(
                  duration === "annually"
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400",
                  "text-base font-medium"
                )}
              >
                Yearly
              </span>
            </div>
            <div className="text-gray-500 dark:text-gray-400">Priced at</div>
            <div className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">
              {formatAsCurrency({
                value: selectedPricingOption?.price?.price ?? 0,
              })}
            </div>
            <div
              onClick={handleCreateClientSecret}
              className="mb-4 flex justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-cyan-900 cursor-pointer"
            >
              Checkout
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              *Contact us for any questions. Pricing is refundable within 30
              days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
