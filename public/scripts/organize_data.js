const organize_slot_data = require("./organize_slot_data");

module.exports =
  (eventData, slotData, userData) => {
    const result = {};
    result.title = eventData[0].title;
    result.description = eventData[0].description;
    result.slots = organize_slot_data(slotData);
    result.users = userData;

    return result;
  };
