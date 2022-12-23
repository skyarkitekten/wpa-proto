import { getWorkItemsForProject, getWorkItemContainersFromPath } from '../../../src/server/workItemService';
import { WorkItem } from '../../../src/models/WorkItems';
import { createProject, createWorkItem, createWorkItemContainer } from '../shared/workItemsTestFactory';

describe('workItemService', () => {
    // Arrange
    const workItems1: WorkItem[] = [
        createWorkItem(1),
        createWorkItem(2),
        createWorkItem(3),
    ];

    const workItems2: WorkItem[] = [
        createWorkItem(4),
        createWorkItem(5),
        createWorkItem(6),
        createWorkItem(7),
    ];

    const workItemContainer1 = createWorkItemContainer("epic1/feature1/story1", workItems1);
    const workItemContainer2 = createWorkItemContainer("epic1/feature1/story2", workItems2);

    const project = createProject(1, [workItemContainer1, workItemContainer2]);

    describe('getWorkItemsForProject', () => {

        // Act
        const workItems = getWorkItemsForProject(project);

        // Assert
        it('should return all work items for a project', () => {
            expect(workItems).toEqual([...workItems1, ...workItems2]);
        });

    })

    describe('getWorkItemContainersFromPath', () => {

        it('should return one container with {story} path', () => {
            // Arrange
            const path = "epic1/feature1/story1";

            // Act
            const containers = getWorkItemContainersFromPath(project, path);

            // Assert
            console.log(containers);
            expect(containers).toEqual([workItemContainer1]);
        });

        it('should return two containers with {feature1} path', () => {
            // Arrange
            const path = "epic1/feature1/";

            // Act
            const containers = getWorkItemContainersFromPath(project, path);

            // Assert
            console.log(containers);
            expect(containers).toEqual([workItemContainer1, workItemContainer2]);
        });

    })
});
