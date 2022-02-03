import { sp } from "@pnp/sp";
import DropDownModel from "src/entities/drop-down";
import MyTablesModel from "src/entities/MyTables";
import SPLists from "src/entities/lists";
import MockData from "./sp-mock-data";

export default class SPRestService {
  public constructor() {
    sp.setup({
      sp: {
        headers: {
          Accept: "application/json; odata=verbose",
        },
      },
    });
  }
  /* *******************************************************************************88 */
  public async checkUserInGroup(groupId: number, userID: number): Promise<boolean> {
    const users: any[] = await sp.web.siteGroups
      .getById(groupId)
      .users.filter("Id eq " + userID)
      .get();
    if (users.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  /*********************************************************************************** */
  public async getDropDownValues(): Promise<DropDownModel[]> {
    if (process.env.NODE_ENV === "production") {
      const listData: any = await sp.web.lists
        .getByTitle(SPLists.DropDownValues)
        .items.top(1000)
        .get();

      const data = listData.map((c: any) => {
        return {
          key: c.Id,
          text: c.Title,
          Icon:c.Icon
        };
      });

      return Promise.resolve(data);
    }
      // return Promise.resolve(MockData.dropDownValues);
    return Promise.resolve([]);
  }

  //

  /*********************************************************************************** */
  public async GetMyTableValues(): Promise<MyTablesModel[]> {
    if (process.env.NODE_ENV === "production") {
      const listData: any = await sp.web.lists
        .getByTitle(SPLists.tablesamira)
        .items.top(1000)
        .get();

      const data = listData.map((c: any) => {
        return {
          key: c.Id,
          name: c.Title,
          Course: c.Course,
          Member: c.Member,
          size: c.size,
          iconName:c.iconName

        };
      });

      return Promise.resolve(data);
    }
      return Promise.resolve(MockData.MyTableValues);
    // return Promise.resolve([]);
  }

  //
}
