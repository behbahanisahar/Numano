/* eslint-disable @typescript-eslint/camelcase */

import DropDownModel from "src/entities/drop-down";
import MyTableModel from "src/entities/MyTables";
import SettingItem from "src/entities/setting-item";
import UserInfo from "src/entities/userinfo";
// import DKSVGIcon from "src/core/components/svg-icon/svg-icon";

export default class MockData {
  public static UserInfo: UserInfo = {
    id: 2,
    title: "سحر بهبهانی",
    firstName: "سحر",
    cxo: "CTO",
    grade: "12",
    avatarTextPlaceholder: "SB",
    isClevel: true,
    emailAddress: "sa.behbahani@digikala.com",
    reportedPost: "Supervisor",
    department: "Human Recources",
    spLatinFullName: "Sahar Behbahani",
    nickName: "OoshoO",
    username: "sanaz.hosseini",
    bio: "یه دوست پایه و پرانرژی که همه از خداشونه یکی مثل منو داشته باشن :)",
    remainingCredit: 70,
    credit: 80,
    wallet: 92,
    //  avatar: "https://aura.digikala.com/hris/kudos-site/Lists/Users/Attachments/2/avatar.jpeg",

    profileCompletionPercentage: 1,
    role: "Admin",
    kudosScore: 75,
  };
  public static MockSetting: SettingItem = {
    active: true,
    title: "Event",
    introText:
      "پلتفرمی برای قدردانی از شماست \n اینجا می شه انتخاب هایی از جنس تفریج و سلامت و غیره رو انتخاب و تجربه کرد، علاوه بر حقوق و دریافتی ماهیانه تون ما براتون مزایا و طرح های متفاوت و جداگانه ای طراحی کردیم که می تونید براساس علاقه مندی و نیازتون برای خودتون و هم خانواده عزیزتون ازش استفاده کنید.",
    iconUrl: "https://aura.digikala.com/hris/joy-site/PublishingImages/gifts/gift.gif",
    imageUrl: "https://aura.digikala.com/hris/joy-site/PublishingImages/gifts/gift.png",
  };
  public static dropDownValues: DropDownModel[] = [
    {
      text: "test",
      key: "1",
    },
    {
      text: "test",
      key: "2",
    },
    {
      text: "test3",
      key: "3",
    },
  ];
  public static MyTableValues: MyTableModel[] = [
    {
      
      key: "first",
      name:"test1",
      course:"computer",
      Member:"12",
      size:"12",

    },
    {
      key: "Second",
      name:"test2",
      course:"Math",
      Member:"13",
      size:"13",

    },
    {
      key: "third",
      name:"test3",
      course:"Art",
      Member:"14",
      size:"14",

    },
    
  ];
}
