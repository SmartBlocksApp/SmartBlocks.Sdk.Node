import type { Block, WorkflowLayout } from ".";

export type Workflow = {
   /** Name of the workflow */
   name: string;
   /** Layout as seen by the user */
   layout: WorkflowLayout;
   /** List of blocks/root level ones present in the workflow */
   blocks: Block[];
};
