import { WorkItem, WorkItemContainer, Project } from '../../../src/models/WorkItems';

export const createWorkItem = (id: number): WorkItem => {
    return {
        id: id,
        title: `Work Item ${id}`,
        description: `Description of work item ${id}`,
        status: 'In Progress',
        createdDate: new Date(),
        lastUpdatedDate: new Date(),
    };
}

export const createWorkItemContainer = (path: string, workItems: WorkItem[]): WorkItemContainer => {
    return {
        hierarchyPath: path,
        workItems: workItems,
    };
}

export const createProject = (id: number, workItemContainers: WorkItemContainer[]): Project => {
    return {
        id: id,
        name: `Project ${id}`,
        description: `Description of project ${id}`,
        workItemContainers: workItemContainers,
    };
}   
