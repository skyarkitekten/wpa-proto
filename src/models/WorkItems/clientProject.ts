import { WorkItemContainer } from './workItems';

export interface Project {
    id: number;
    name: string;
    description: string;
    workItemContainers: WorkItemContainer[];
};
