/**
 * frontend interface for Grocery, this allows me to recieve
 * a typed response from the api, which is more safe and easy to
 * work with
 */
export interface Grocery {
  _id: string // needs an '_' because of mongodb
  name: string
  needed: boolean
  createdTimeStamp: Date
}
