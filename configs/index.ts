const localhost = process.env.DOCKER_LOCALHOST || "localhost";
const restUrl = process.env.REST_URL || `http://${localhost}:3300`;

export const config = {
  restUrl,
};
