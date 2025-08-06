import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Use client IP as identifier for rate limiting
    const identifier = req.ip || "anonymous"; //should pu user id if i have auth
    const { success } = await rateLimit.limit(identifier);

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later." }); // If limit exceeded, return 429 status
    }
  } catch (error) {
    console.error("Rate limiter error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
  next();
};

export default rateLimiter;
