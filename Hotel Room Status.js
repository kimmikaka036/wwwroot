// fsm-config: {"rankdir": "LR"}
// fsm-begin
var mainFsm ={
    name : 'MainFsm',
    initial : "Initial",
    final : 'End',
    events: [
        {name:'Put into service', from: 'Initial', to: 'Vacant'},
        {name:'Clean', from:'Vacant', to:'Available'},
        {name:'Take out of service', from:'Vacant', to:'End'},
        {name:'Check In', from:'Available', to:'Occupied'},
        {name:'Take out of service', from:'Available', to:'End'},
        {name:'Check out', from:'Occupied', to:'Vacant'}
    ]
}
// fsm-end 