import dayjs from "dayjs";
export default class ConsoleLogWorker {
    write = async (logString) => {
        console.log(dayjs().format("MM-DD-YYYY"), logString);
    };
}
//# sourceMappingURL=index.mjs.map