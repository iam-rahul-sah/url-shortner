import * as React from "react";
import { FormContainer } from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import { DataTable } from "../DataTable/DataTable";

interface IContainerProps {}

export const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const setReloadState = (): void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${serverUrl}/shorturl`);
      console.log("The response from server is :", response);
      setData(response.data);
      setReload(false);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);
  return (
    <>
      <FormContainer setReloadState={setReloadState} />
      <DataTable data={data} setReloadState={setReloadState} />
    </>
  );
};
