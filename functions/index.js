const functions = Runtime.getFunctions();

let Nordis = require(functions['Nordis'].path);
let agent_transfer = require(functions['agent_transfer'].path);

exports.handler = async (context, event, callback) => {

  const { CurrentTask } = event;

  // calling task handlers
  switch (CurrentTask) {
    
    case 'Nordis':
      {
        console.log("CurrentTask: " + CurrentTask);
        await Nordis.Nordis(context, event, callback);
        break;
      }
    case 'agent_transfer':
      {
        console.log("CurrentTask: " + CurrentTask);
        await agent_transfer.agent_transfer(context, event, callback);
        break;
      }

    
  }
};