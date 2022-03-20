import { sp } from "@pnp/sp";
import DropDownModel from "src/entities/drop-down";
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
  

  //
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
          Parent:c.Parent

        };
      });

      return Promise.resolve(data);
    }
      return Promise.resolve(MockData.dropDownValues);
    //return Promise.resolve([]);
  }

}
