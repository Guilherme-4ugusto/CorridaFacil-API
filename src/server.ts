import { serverHttp } from "./http";
require("./websocket");
/*require("./crons/delete_logs_cron")*/

serverHttp.listen(3000, () => console.log("Server is running on PORT 3000"));
