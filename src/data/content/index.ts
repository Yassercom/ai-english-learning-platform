import type { RawLesson } from "../types";
import { m01 } from "./m01";
import { m02 } from "./m02";
import { m02b } from "./m02b";
import { m03 } from "./m03";
import { m03b } from "./m03b";
import { m04 } from "./m04";
import { m04b } from "./m04b";
import { m05 } from "./m05";
import { m05b } from "./m05b";
import { m06 } from "./m06";
import { m06b } from "./m06b";
import { m07 } from "./m07";
import { m07b } from "./m07b";
import { m08 } from "./m08";
import { m08b } from "./m08b";
import { m09 } from "./m09";
import { m09b } from "./m09b";
import { m10 } from "./m10";
import { m10b } from "./m10b";
import { m11 } from "./m11";
import { m11b } from "./m11b";
import { m12 } from "./m12";
import { m12b } from "./m12b";

export const RAW_LESSONS: RawLesson[] = [
  ...m01, ...m02, ...m02b, ...m03, ...m03b, ...m04, ...m04b, ...m05, ...m05b, ...m06, ...m06b,
  ...m07, ...m07b, ...m08, ...m08b, ...m09, ...m09b, ...m10, ...m10b, ...m11, ...m11b, ...m12, ...m12b,
];
