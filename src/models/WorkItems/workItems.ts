import { Person } from '../People';

type WorkItem = {
    id: number;
    title: string;
    description: string;
    status: string;
    assignedTo: Person;
    createdBy: Person;
    createdDate: Date;
    lastUpdatedDate: Date;
};

type WorkItemContainer = {
    heirarchypath: string;
    workItems: WorkItem[];
};