import ckan from "ckan";
import { Actions, DATA_GOV_BASE_URL } from "./constants";

const client = new ckan.Client(DATA_GOV_BASE_URL);

export function getData<TData, TResponse>(
  data: TData,
  callback: (response: TResponse) => void
) {
  return client.action(Actions.datastoreSearch, data, callback);
}
