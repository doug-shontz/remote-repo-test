import dayjs from "dayjs";

export default class ConsoleLogWorker
{
  public write = async (
    logString: string
  ): Promise<void> => {
    console.log(dayjs().format("MM-DD-YYYY"), logString);
  };
}
