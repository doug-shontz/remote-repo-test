import dayjs from "dayjs";
export class TestWorker {
    write = async (logString) => {
        console.log(dayjs().format("MM-DD-YYYY"), logString);
    };
}
//# sourceMappingURL=index.mjs.map