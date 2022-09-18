/**
 * frontend interface for LeftoverPost, this allows me to recieve
 * a typed response from the api, which is more safe and easy to
 * work with
 */
export interface LeftoverPost {
    // picture: buffer
    description: string
    where: string
    who: string
    createdTimeStamp: Date
}
