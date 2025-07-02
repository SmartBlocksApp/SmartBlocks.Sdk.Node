import { ICallbackInstruction, CallbackParameters, Instruction, InstructionType } from "../../models/builder";

export class Callback implements ICallbackInstruction {
   private _instruction: Instruction<CallbackParameters>;

   constructor(name: string, branchName?: string) {
      this._instruction = {
         service: "",
         type: InstructionType.Callback,
         instruction: {
            name: name,
            branchName: branchName ?? name,
         },
         _processed: false,
      };
   }

   public service(name: string): this {
      this._instruction.service = name;

      return this;
   }

   public name(name: string): this {
      this._instruction.instruction.name = name;

      return this;
   }

   public branchName(name: string): this {
      this._instruction.instruction.branchName = name;

      return this;
   }

   public build(): Instruction<CallbackParameters> {
      return this._instruction;
   }
}
