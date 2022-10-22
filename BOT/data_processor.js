const Machineries = require('./json/Milling_Machine.json')



// Keyboards Data

const Machineries_list_keyboard = () => {
  var machinery_lists = []
  var machineries_length = Machineries[0]["Machineries"].length;
  for(let i=0; i<machineries_length; i++){
    machinery_lists.push([Machineries[0]['Machineries'][i], Machineries[0]['Machineries'][i+1]])
    i++;
    }
  machinery_lists.push([{"text":"cancel", "callback_data":"cancel"}])
    return machinery_lists;
}

const Models_list_keyboard = (index) => {
  var list = [];
  var models_length = Machineries[0]["Machineries"][index]["models"].length;
  for(var i=0; i<models_length; i++){
    list.push([Machineries[0]['Machineries'][index]["models"][i], Machineries[0]['Machineries'][index]["models"][i+1]]);
    i++;
  }
  list.push([{"text":"cancel", "callback_data": "cancel"}])
  return list;
}

// Callbacks Data

const Machineries_list_callbacks = () => {
  var list = [];
  var machineries_length = Machineries[0]["Machineries"].length;
  for(let i=0; i<machineries_length; i++){
    list.push(Machineries[0]['Machineries'][i]['callback_data']);
    }
  return list;
}

const Models_list_callback = (index) => {
  var list = [];
  var models_length = Machineries[0]["Machineries"][index]["models"].length;
  for(let i=0; i<models_length; i++){
    list.push(Machineries[0]["Machineries"][index]["models"][i]['callback_data']);
    }
  
  return list;
}


// Orders Data

const Order_details = (info) => {

}


module.exports = {
  Machineries_list_keyboard,
  Machineries_list_callbacks,
  Models_list_keyboard,
  Models_list_callback
}