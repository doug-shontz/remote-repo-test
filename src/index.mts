export class TestWorker
{
  public write = async (
    logString: string
  ): Promise<void> => {
    console.log(logString);
  };
}
