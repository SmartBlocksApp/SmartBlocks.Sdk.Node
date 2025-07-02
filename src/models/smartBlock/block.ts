import type { BlockBranch, BlockSource } from ".";

export type Block = {
   /** Unique id of the block */
   id: string;
   /** Type/Metadata source of the block */
   type: BlockSource;

   /** X position in the workspace */
   x?: number;
   /** Y position in the workspace */
   y?: number;
   /** Caption as displayed to the user */
   caption: string;

   /** Collapsed state of the block */
   isCollapsed: boolean;

   /** Values set for the inputs */
   inputs: { [key: string]: any };

   /** Branches and respective blocks (if any) */
   branches?: BlockBranch[];
};
