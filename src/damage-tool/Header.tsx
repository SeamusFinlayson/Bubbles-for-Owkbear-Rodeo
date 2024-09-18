import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Command from "./components/Command";
import { EditorMode, StampedDiceRoll } from "./types";
import { Button } from "@/components/ui/button";

export default function Header({
  editorMode,
  setEditorMode,
  setStampedRolls: setRolls,
}: {
  editorMode: EditorMode;
  setEditorMode: React.Dispatch<React.SetStateAction<EditorMode>>;
  setStampedRolls: React.Dispatch<React.SetStateAction<StampedDiceRoll[]>>;
}): JSX.Element {
  return (
    <div className="flex gap-4 px-4">
      <Command
        setEditorMode={setEditorMode}
        setStampedRolls={setRolls}
      ></Command>
      <Select
        value={editorMode}
        onValueChange={(value) => {
          setEditorMode(value as EditorMode);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Editor Mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Editor Mode</SelectLabel>
            <SelectItem value="setValues">Set Values</SelectItem>
            <SelectItem value="damage">Damage</SelectItem>
            <SelectItem value="healing">Heal</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button size={"icon"} variant={"outline"}>
        {" i "}
      </Button>
    </div>
  );
}
