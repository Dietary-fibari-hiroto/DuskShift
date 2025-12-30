import cafe from "./photos/cafe.jpg";
import calendar from "./photos/calendar.png";
import desk_img from "./photos/desk_img.png";
import duskman_working from "./photos/duskman_working.png";
import duskowl from "./photos/duskowl.png";
import duskowl_feather from "./photos/duskowl_feather.png";
import duskowl_hi from "./photos/duskowl_hi.png";
import duskowl_mail from "./photos/duskowl_mail.png";
import IMG_7038 from "./photos/IMG_7038.jpg";
import IMG_7188_N9zbY25W from "./photos/IMG_7188.N9zbY25W.jpg";
import pexels_dariaobymaha_1684151 from "./photos/pexels-dariaobymaha-1684151.jpg";
import pexels_myfoodie_2551794 from "./photos/pexels-myfoodie-2551794.jpg";

export const ImagesRoute = {
  cafe: cafe.src,
  calendar: calendar.src,
  desk_img: desk_img.src,
  duskman_working: duskman_working.src,
  duskowl: duskowl.src,
  duskowl_feather: duskowl_feather.src,
  duskowl_hi: duskowl_hi.src,
  duskowl_mail: duskowl_mail.src,
  IMG_7038: IMG_7038.src,
  IMG_7188_N9zbY25W: IMG_7188_N9zbY25W.src,
  pexels_dariaobymaha_1684151: pexels_dariaobymaha_1684151.src,
  pexels_myfoodie_2551794: pexels_myfoodie_2551794.src,
};

export type ImageKey = keyof typeof ImagesRoute;
