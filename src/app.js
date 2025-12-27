import express from "express";
import cors from "cors";

//routes
import postsRoutes from "./routes/posts.routes.js";
import usersRoutes from "./routes/users.routes.js";
import commentsRoutes from "./routes/comments.routes.js";
// import likesRoutes from './routes/likes.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/posts", postsRoutes);
app.use("/api/v1/comments", commentsRoutes);
// app.use("/api/v1/likes", likesRoutes);
// app.use("/api/v1/tags", tagsRoutes);

app.get("/api/v1/health", (req, res) => {
  res.status(200).send({
    status: "OK",
    service: "JSONWave API",
    // uptime: process.uptime(),
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    message:
      "🌊 JSONWave API is a free mock REST API for testing and prototyping frontend and mobile applications.",
  });
});

app.use((req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
//   console.error(`[ERROR] ${err.message}`);
  res
    .status(err.status || 500)
    .json({
      success: false,
      status: err.status || 500,
      message: err.message || "Internal Server Error",
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    });
});
export default app;
