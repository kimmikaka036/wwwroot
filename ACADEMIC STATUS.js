// fsm-config: {"rankdir": "LR"}
// fsm-begin
var mainFsm ={
    name : 'MainFsm',
    initial : "Initial",
    final : 'End',
    events: [
        {name:'GPA more than 2.00', from: 'Initial', to: 'Normal'},
        {name:'GPA less than 2.00 when completing 2 semesters', from:'Normal', to:'Pro1'},
        {name:'GPA less than 1.00-1.99 in the first semester', from:'Normal', to:'Critical'},
        {name:'GPA less than 1.00 in first semester', from:'Normal', to:'Retire'},
        {name:'GPA less than 2.00 when completing 2 semesters', from:'Critical', to:'Pro1'},
        {name:'GPA more than 2.00', from:'Critical', to:'Normal'},
        {name:'GPA more than 2.00', from:'Pro1', to:'Normal'},
        {name:'GPA from 1.70 but less than 2.00', from:'Pro1', to:'Pro2'},
        {name:'GPA less than 1.70', from:'Pro1', to:'Retire'},
        {name:'GPA from 1.90 but less than 2.00', from:'Pro2', to:'Pro3'},
        {name:'GPA more than 2.00', from:'Pro2', to:'Normal'},
        {name:'GPA less than 1.90', from:'Pro2', to:'Retire'},
        {name:'GPA more than 2.00', from:'Pro3', to:'Normal'},
        {name:'GPA less than 2.00', from:'Pro3', to:'Retire'},
        {name:'Retire', from:'Retire', to:'End'},
    ]
}
// fsm-end 