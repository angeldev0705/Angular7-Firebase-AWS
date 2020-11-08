import { Config } from "../../../src/app/config/config.model";
import { FOHlayouts } from "./foh-layouts";
import { FOHprogression, FOHratingCriteria } from "./foh-progression";

export var FOHConfig: Config = {
  client: {
    destinationId: "frontOfHouse",
    destinationName: "Front of House",
    progression: FOHprogression,
    layoutGeneration : FOHlayouts,
    defaultLayoutTimes: [ 11, 14, 17 ],
    suggestedLayoutTimes: [ 9, 11, 17, 21, 22 ],
  },
  server: {
    // Schedule Id's for: Training, Leadership, and Front of House
    schedulesToTranscript: [ 1068569866, 1068569859, 1068569879 ],
    shifts: {
      neverShort: {
        // TODO: update this JobId. This value changes with every business, but it isn't critical to
        // the demo process. Delete these two lines of comment when the value is replaced
        jobIds: [ 1068569891 ], // HS FOH General JobId
      }
    }
  },
  training: {
    ratingCriteria: FOHratingCriteria,
  }
}
