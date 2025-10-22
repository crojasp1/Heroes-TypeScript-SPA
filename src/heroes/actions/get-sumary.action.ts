import { heroApi } from "../api/hero.api";
import type { SummaryInformationResponse } from "../types/summary-information.response";


export const getSumaryAction = async() => {
  const {data} = await heroApi.get<SummaryInformationResponse>("/summary");

  return data;
}