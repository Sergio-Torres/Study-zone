import React from 'react';

//Banner
export const TaskBanner = props =>(
    <h4 className="text-white text-center p-4">
        Tasks ({props.taskItems.filter(t=> !t.done).length} tasks to do)
    </h4>
)
