import { Project, WorkItem, WorkItemContainer } from '../models/WorkItems';

export const getWorkItemsForProject = (project: Project): WorkItem[] => {
    const workItems = project.workItemContainers.reduce((acc: WorkItem[], container: WorkItemContainer) => {
        return acc.concat(container.workItems);
    }, []);
    return workItems;
};

export const getWorkItemContainersFromPath = (project: Project, path: string): WorkItemContainer[] => {
    const workItemContainers = project.workItemContainers.filter((container: WorkItemContainer) => {
        return container.hierarchyPath === path; //TODO: This is a naive implementation. We need to handle the case where the path is a subpath of the container's path.
    });
    return workItemContainers;
};
