import {IDesk} from "./idesk";
import {Topic} from "./topic";
import {IOperatingHours} from "./ioperating-hours";
import {IHoliday} from "./iholiday";
import {IEmail} from "./iemail";
import {ISegment} from "./isegment";
import {IContactUs} from "./icontact-us";
export interface ITopicDetail {

  desk: IDesk;
  topic: Topic;
  operatingHours: IOperatingHours[];
  holidays: IHoliday[];
  email: IEmail;
  segment: ISegment;
  contactUs: IContactUs;

}
