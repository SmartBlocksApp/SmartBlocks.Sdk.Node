import { IBranchInstruction, BranchParameters, Instruction, InstructionType } from "../../models/builder";

export class Branch implements IBranchInstruction {
   private _instruction: Instruction<BranchParameters>;

   constructor(name: string, code: string) {
      this._instruction = {
         service: "",
         type: InstructionType.Branch,
         instruction: {
            branchName: name,
            code: code,
         },
         _processed: false,
      };
   }

   public service(name: string): this {
      this._instruction.service = name;

      return this;
   }

   public branchName(name: string): this {
      this._instruction.instruction.branchName = name;

      return this;
   }

   public build(): Instruction<BranchParameters> {
      return this._instruction;
   }
}
