module.exports =
  (slotData) => {
    const result = {};
    slotData.forEach((slot) => {
      if (!result[slot.id]) {
        result[slot.id] = {};
        result[slot.id].date = slot.date;
        result[slot.id].start_time = slot.start_time;
        result[slot.id].end_time = slot.end_time;
        result[slot.id].users = []
      }
      result[slot.id].users.push(slot.user_id);
    });
    return Object.keys(result).map( (key)=>result[key] );
  };
