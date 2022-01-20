import { sp, Web } from "@pnp/sp";
import SPLists from "src/entities/lists";

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
  public async getBpDepartments(userId: number): Promise<any[]> {
    if (process.env.NODE_ENV === "production") {
      const web = new Web("https://aura.digikala.com/hris/");
      const listData: any = await web.lists
        .getByTitle(SPLists.BusinessPartners)
        .items.filter(`UserInfoId eq ${userId}`)
        .top(1000)
        .get();

      const data = listData.map((c: any) => {
        return {
          key: c.Level1Department,
          text: c.Level1Department,
        };
      });

      return Promise.resolve(data);
    }
    // return Promise.resolve(MockData.bpDepartments);
    return Promise.resolve([]);
  }

  //
}
