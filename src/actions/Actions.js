export const createBuckets = (bucketsList) => {
  return {
    type: "CREATE_BUCKETS",
    buckets: bucketsList,
  };
};
