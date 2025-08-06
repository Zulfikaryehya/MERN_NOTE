import React from "react";

const RateLimitedUI = ({
  message = "You have sent too many requests and reached your limit.",
  retryAfter = 60, // seconds until retry is available
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-8">
      <div className="card-body items-center text-center">
        <div className="text-warning text-4xl mb-2">⚠️</div>
        <h2 className="card-title text-error">Rate Limit Exceeded</h2>
        <p className="text-base-content">{message}</p>
        <div className="badge badge-secondary my-2">
          Please try again in {retryAfter} seconds
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
