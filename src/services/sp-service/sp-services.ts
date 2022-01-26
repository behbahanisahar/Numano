import { sp } from "@pnp/sp";
import DropDownModel from "src/entities/drop-down";
import SPLists from "src/entities/lists";
import MockData from "./sp-mock-data";
import TblMehdiModel from "src/entities/Tbl-Mehdi";

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
        };
      });

      return Promise.resolve(data);
    }
      return Promise.resolve(MockData.dropDownValues);
   // return Promise.resolve([]);
  }

  //
  /*********************************************************************************** */
  public async getTblMehdiValues(): Promise<TblMehdiModel[]> {
    if (process.env.NODE_ENV === "production") {
      const listData: any = await sp.web.lists
        .getByTitle(SPLists.MehdiTb)
        .items.top(1000)
        .get();

      const data = listData.map((c: any) => {
        return {
          key: c.Id,
          Name: c.Title,
          Course: c.Course,
          Member: c.Member,
          Size: c.Size,
          Icon:c.Icon 
        };
      });

      return Promise.resolve(data);
    }
      return Promise.resolve(MockData.TblMehdiValues);
   //return Promise.resolve([]);
  }

  //
}
