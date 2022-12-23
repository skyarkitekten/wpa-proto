import { Person } from '../People';

export type WorkItem = {
    id: number;
    title: string;
    description: string;
    status: string;
    assignedTo?: Person; // could use a pointer to a employeeId
    createdBy?: Person; // could use a pointer to a employeeId
    createdDate: Date;
    lastUpdatedDate: Date;
};

export type WorkItemContainer = {
    hierarchyPath: string;
    workItems: WorkItem[];
};