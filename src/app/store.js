import { configureStore } from "@reduxjs/toolkit";
import topics from "../features/topics/topicsSlice";
console.log('topics in store.js', topics)

export default configureStore({
  reducer: {
    topics
  },
});
