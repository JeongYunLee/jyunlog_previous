import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Users/jeongyunl/Documents/GitHub/jyunlog/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
