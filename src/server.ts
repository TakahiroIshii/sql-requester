import axios from "axios";
import Aigle from "aigle";
import { config } from "../configs";

interface MessageBody {
  id: string;
}

async function main() {
  console.time("runTime");
  console.log("START!");
  const [num] = process.argv.slice(2);
  await Aigle.timesLimit(Number(num), async (i) => {
    const body: MessageBody = {
      id: `taka-${i}`,
    };
    await axios.post(`${config.restUrl}/user`, body);
  });
  console.log("DONE!");
  console.timeEnd("runTime");
}

(async () => {
  try {
    await main();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
