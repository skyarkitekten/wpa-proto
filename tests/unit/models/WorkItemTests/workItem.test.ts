import { createWorkItem, createWorkItemContainer, createProject } from '../../shared/workItemsTestFactory';

describe('Work Items', () => {
    describe('an individual work item can be created', () => {
        const workItem = createWorkItem(1);

        it('should be defined', () => {
            expect(workItem).toBeDefined();
        });

        it('id should be defined', () => {
            expect(workItem.id).toBe(1);
        });

        it('title should be defined', () => {
            expect(workItem.title).toBe('Work Item 1');
        });
    });

    describe('a work item container can be created', () => {

        const workItemContainer = createWorkItemContainer('epic1/feature1');

        it('should be defined', () => {
            expect(workItemContainer).toBeDefined();
        });

        it('hierarchyPath should be defined', () => {
            expect(workItemContainer.hierarchyPath).toBe('epic1/feature1');
        });

        it('workItems should be defined', () => {
            expect(workItemContainer.workItems).toBeDefined();
        });

        it('workItems should have 3 items', () => {
            expect(workItemContainer.workItems.length).toBe(3);
        });
    })
});
