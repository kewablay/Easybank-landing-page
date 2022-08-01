import React from "react";
import Online from "../images/icon-online.svg";
import Budgeting from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";
import Api from "../images/icon-api.svg";
import Card from "./Card";

function Services() {
  return (
    <div className="bg-primary_100 my-20 p-10 sm:my-0">
      {/* Services intro text */}
      <div className="mb-16 text-center sm:text-left">
        <h1 className="text-2xl"> Why choose Easybank?</h1>
        <p className="max-w-2xl text-primary_500 font-[500] mt-2">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      {/* Services cards */}
      <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          img={Online}
          title={"Online Banking"}
          text={
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          }
          isServices={true}
        />

        <Card
          img={Budgeting}
          title={"Simple Budgeting"}
          text={
            " See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
          }
          isServices={true}
        />
        <Card
          img={Onboarding}
          title={"Fast Onboarding"}
          text={
            "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          }
          isServices={true}
        />
        <Card
          img={Api}
          title={"Open API"}
          text={
            " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          }
          isServices={true}
        />
      </div>
    </div>
  );
}

export default Services;
