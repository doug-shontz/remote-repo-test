import dayjs from "dayjs";

export class TestWorker
{
  public write = async (
    logString: string
  ): Promise<void> => {
    console.log(dayjs().format("MM-DD-YYYY"), logString);
  };
}
