import { Project, WorkItem, WorkItemContainer } from '../models/WorkItems';

export const getWorkItemsForProject = (project: Project): WorkItem[] => {
    const workItems = project.workItemContainers.reduce((acc: WorkItem[], container: WorkItemContainer) => {
        return acc.concat(container.workItems);
    }, []);
    return workItems;
};

export const getWorkItemContainersFromPath = (project: Project, path: string): WorkItemContainer[] => {
    //TODO: This is a naive implementation. We better use a tree structure to find the containers
    const workItemContainers = project.workItemContainers.filter((container: WorkItemContainer) => {
        return container.hierarchyPath.includes(path);
    });
    return workItemContainers;
};
